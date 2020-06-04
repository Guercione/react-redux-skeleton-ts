interface ErrorTemplateParentProps {
  code: number;
  title: string;
  subtitle?: string;
}

export type ErrorTemplateProps = ErrorTemplateParentProps;

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ErrorBoundaryParentProps {
  children: React.ReactNode;
}

export type ErrorBoundaryProps = ErrorBoundaryState & ErrorBoundaryParentProps;
