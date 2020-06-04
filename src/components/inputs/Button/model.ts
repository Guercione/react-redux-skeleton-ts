export interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  color?: string;
  onClick(): void;
}

export interface StyleProps {
  color: string | undefined;
}
