export interface FieldProps {
    text: string;
    type: string;
    className?: string;
    placeholder: string;
    onInput: (text: string) => void;

}