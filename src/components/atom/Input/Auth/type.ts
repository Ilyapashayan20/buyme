export type TAuthInputProps = {
  label: string;
  placeholder?: string;
  value?: string;
  type?: string;
  validate?: (value: string) => string | null;
  onChange?: (value: string) => void;
  error?: string;
  setError?: (error: any) => void; 
};
