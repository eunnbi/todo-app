import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import styled from "@emotion/styled";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useToggle } from "../../../hooks/useToggle";
import { useTheme } from "@emotion/react";

interface FormInputProps {
  name: string;
  label: string;
  value: string;
  error: boolean;
  helperText: string;
  type: "text" | "password" | "email";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  label,
  value,
  onChange,
  type,
  name,
  error,
  helperText,
}: FormInputProps) => {
  const { name: themeName } = useTheme();
  const [showPassword, clickShowPassword] = useToggle(false);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <CustomLabel htmlFor={name} sx={{ fontFamily: "NotoSans" }} error={error}>
        {label}
      </CustomLabel>
      <CustomInput
        color={themeName === "light" ? "primary" : "secondary"}
        id={name}
        type={type !== "password" ? type : showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        name={name}
        label={label}
        error={error}
        endAdornment={
          type == "password" ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={clickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </IconButton>
            </InputAdornment>
          ) : null
        }
      />
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormInput;

const CustomLabel = styled(InputLabel)`
  color: ${({ theme }) => theme.name === "dark" && "gray"};
`;

const CustomInput = styled(OutlinedInput)`
  color: ${({ theme }) => theme.color.textColor};
  fieldset {
    border-color: ${({ theme }) => theme.name === "dark" && "gray"};
  }
  &:hover {
    border-color: ${({ theme }) =>
      theme.name === "dark" && theme.color.textColor};
  }
  span {
    color: ${({ theme }) => theme.color.mainColor} !important;
  }
`;
