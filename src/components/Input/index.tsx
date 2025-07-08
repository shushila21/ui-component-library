import { Input as AntInput, InputProps } from 'antd';

const InputComponent = (props: InputProps) => <AntInput {...props} />;

InputComponent.Password = AntInput.Password;
InputComponent.TextArea = AntInput.TextArea;
InputComponent.Search = AntInput.Search;
InputComponent.Group = AntInput.Group;
InputComponent.OTP = AntInput.OTP;

export const Input = InputComponent as typeof AntInput;
