import React from 'react';
import { Spinner } from '@chakra-ui/react';

interface ILoadingSpinnerProps {
  spinnerColor: string;
}

const LoadingSpinner = ({ spinnerColor }: ILoadingSpinnerProps) => {
  return (
    <Spinner
      as="span"
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color={spinnerColor}
      size="xl"
    />
  );
};

export default LoadingSpinner;
