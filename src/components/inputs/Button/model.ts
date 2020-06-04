interface ButtonParentProps {
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  color?: string;
  onClick(): void;
}

export type ButtonProps = ButtonParentProps;
