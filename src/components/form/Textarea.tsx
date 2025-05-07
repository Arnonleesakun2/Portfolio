import {
  Controller,
  Control,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  control: Control<T>;
  errors: FieldErrors<T>;
  name: Path<T>;
  label: string;
  type: string;
  defaultValue?: string;
};

const Textarea = <T extends FieldValues>({
  name,
  errors,
  control,
  label,
  type,
}: InputProps<T>) => {
  return (
    <div className="">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <label className="floating-label">
            <span>{label}</span>
            <textarea
              typeof={type}
              placeholder={label}
              {...field}
              className={`textarea rounded-4xl w-full h-[150px] ${
                errors[name] ? "border-red-400 focus:border-red-500" : ""
              }`}
            ></textarea>
          </label>
        )}
      />
      {errors[name] && (
        <p className="text-red-400 text-xs mt-1 ml-3">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};
export default Textarea;
