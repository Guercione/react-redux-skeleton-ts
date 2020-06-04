import React from 'react';

import ErrorTemplate from './ErrorTemplate';

const Error404: React.FC = () => {
  return (
    <ErrorTemplate code={404} title="Sorry, this page does not exist anymore" />
  );
};

export default Error404;
