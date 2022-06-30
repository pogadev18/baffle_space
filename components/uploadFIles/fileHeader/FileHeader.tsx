import { Flex, Button } from '@chakra-ui/react';
import { HiOutlineTrash } from 'react-icons/hi';

export interface FileHeaderProps {
  file: File;
  // eslint-disable-next-line no-unused-vars
  onDelete: (file: File) => void;
}

const FileHeader = ({ file, onDelete }: FileHeaderProps) => {
  const { name } = file;
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <span>{name}</span>
      <Button onClick={() => onDelete(file)} rightIcon={<HiOutlineTrash />} rounded="full" px={6}>
        delete
      </Button>
    </Flex>
  );
};

export default FileHeader;
