"use client";
import { TextField, TextFieldProps } from "@mui/material";

type Props = TextFieldProps & {
  label?: string;
};

export default function InputField({ label, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm text-gray-400">{label}</label>}
      <TextField
        {...props}
        fullWidth
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        sx={{
          input: { color: "white" },
          fieldset: { borderColor: "#3f3f46" },
          "&:hover fieldset": { borderColor: "#D4F5FF" },
          "& input[type='date']::-webkit-calendar-picker-indicator": {
            filter: "invert(1)",
            cursor: "pointer",
          },
        }}
      />
    </div>
  );
}
