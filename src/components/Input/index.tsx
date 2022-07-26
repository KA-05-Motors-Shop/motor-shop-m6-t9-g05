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
  mask?: string;
  error?: any;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, mask, ...rest },
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  if (!mask) {
    return (
      <Container>
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
