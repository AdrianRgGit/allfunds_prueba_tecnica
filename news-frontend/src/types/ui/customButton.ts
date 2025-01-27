export interface CustomButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
