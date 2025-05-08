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
const Input = <T extends FieldValues>({
  name,
  errors,
  control,
  label,
  type,
  defaultValue,
}: InputProps<T>) => {
  return (
    <div className="">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <label className="floating-label">
            <span>{label}</span>
            <input
              {...field}
              value={defaultValue}
              type={type}
              placeholder={label}
              className={`input z-1 input-md rounded-4xl w-full ${
                errors[name] ? "border-red-400 focus:border-red-500" : ""
              }`}
            />
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
export default Input;
