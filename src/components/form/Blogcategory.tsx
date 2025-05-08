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
};

const Blogcategory = <T extends FieldValues>({
  name,
  control,
  errors,
}: InputProps<T>) => {
  const categories = [
    "Technology",
    "Programming",
    "Web Development",
    "Design",
    "Personal",
    "Other",
    "Web Basics",
    "Frontend Development",
    "Backend Development",
    "Fullstack & Frameworks",
    "Database",
  ];

  return (
    <div className="space-y-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            {...field}
            className={`select select-bordered rounded-4xl w-full ${
              errors[name] ? "border-red-400 focus:border-red-500" : ""
            }`}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        )}
      />
      {errors[name] && (
        <p className="text-red-400 text-xs mt-1 ml-3">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default Blogcategory;
