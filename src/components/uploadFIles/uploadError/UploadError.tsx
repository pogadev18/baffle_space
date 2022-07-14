import FileHeader from '@/components/uploadFIles/fileHeader';
import { Progress } from '@chakra-ui/react';
import { FileError } from 'react-dropzone';

interface UploadErrorProps {
  file: File;
  // eslint-disable-next-line no-unused-vars
  onDelete: (file: File) => void;
  errors: FileError[];
}
const UploadError = ({ file, onDelete, errors }: UploadErrorProps) => {
  return (
    <>
      <FileHeader file={file} onDelete={onDelete} />
      <Progress size="md" colorScheme="red" value={100} />
      {errors.length !== 0 && errors.map(({ message }) => <span>{message}</span>)}
    </>
  );
};

export default UploadError;
