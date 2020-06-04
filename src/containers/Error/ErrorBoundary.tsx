import React from 'react';

import ErrorTemplate from './ErrorTemplate';

import { ErrorBoundaryParentProps, ErrorBoundaryState } from './model';

class ErrorBoundary extends React.Component<
  ErrorBoundaryParentProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryParentProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error Boundary - ', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorTemplate
          code={500}
          title="Something went wrong"
          subtitle="If the error persists, please get in contact with the Administration"
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
