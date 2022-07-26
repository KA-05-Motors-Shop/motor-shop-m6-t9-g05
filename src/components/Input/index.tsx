import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useRef,
} from "react";
import { Container, InputContainer, Label } from "./styles";
import InputMask from "react-input-mask";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  width?: number;
  mask?: string;
  error?: any;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, mask, width = 95, ...rest },
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  if (!mask) {
    return (
      <Container width={width}>
        <Label>
          {label} {!!error && <span> - {error}</span>}{" "}
        </Label>
        <InputContainer>
          <input {...rest} ref={ref} />
        </InputContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Label>
        {label} {!!error && <span> - {error}</span>}{" "}
      </Label>
      <InputContainer>
        <InputMask mask={mask} {...rest} inputRef={inputRef} />
      </InputContainer>
    </Container>
  );
};

export const Input = forwardRef(InputDefault);
