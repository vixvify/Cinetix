"use client";
import { TextField } from "@mui/material";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  label?: string;
  field: ControllerRenderProps<T, Path<T>>;
};

export default function FileField<T extends FieldValues>({
  label,
  field,
}: Props<T>) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm text-gray-400">{label}</label>}
      <TextField
        type="file"
        fullWidth
        variant="outlined"
        onChange={(e) => {
          const files = (e.target as HTMLInputElement).files;
          field.onChange(files);
        }}
        sx={{
          input: { color: "white" },
          fieldset: { borderColor: "#3f3f46" },
          "&:hover fieldset": { borderColor: "#D4F5FF" },
        }}
      />
    </div>
  );
}
