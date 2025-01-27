export interface CustomButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  bg?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
