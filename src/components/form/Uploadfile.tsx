import React, { useState } from "react";
import { ImageUp } from "lucide-react";
import { useToast } from "@/context/ToastContext";
import {
  Controller,
  Control,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import Image from "next/image";

type UploadFileProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
};

const Uploadfile = <T extends FieldValues>({
  name,
  errors,
  control,
}: UploadFileProps<T>) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { showToast } = useToast();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, ref } }) => (
        <div className="space-y-2">
          <div
            className={`border-2 border-dashed rounded-4xl p-6 text-center cursor-pointer hover:bg-base-200 transition-colors ${
              imagePreview ? "border-green-500" : "border-gray-300"
            } ${errors[name] ? "border-red-400 focus:border-red-500" : ""}`}
            onClick={() => document.getElementById(name)?.click()}
          >
            <input
              type="file"
              id={name}
              accept="image/*"
              className="hidden"
              ref={ref}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  if (file.size > 5 * 1024 * 1024) {
                    showToast("Image size should be less than 5MB", "error");
                    return;
                  }
                  onChange(file);
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImagePreview(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />

            {imagePreview ? (
              <div className="space-y-4">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-60 mx-auto rounded-lg object-cover"
                />
                <p className="text-sm text-green-500">
                  Image uploaded! Click to change
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <ImageUp className="mx-auto h-12 w-12 text-gray-400" />
                <p className="text-sm text-gray-500">
                  Click to upload image (max 5MB)
                </p>
              </div>
            )}
          </div>
          {errors[name] && (
            <p className="text-red-400 text-xs mt-1 ml-3">
              {errors[name]?.message?.toString()}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default Uploadfile;
