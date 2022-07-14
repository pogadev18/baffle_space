import React from 'react';
import { Stack } from '@chakra-ui/layout';
import { Flex, Box, Image } from '@chakra-ui/react';

import FileHeader from '@/components/uploadFIles/fileHeader';

export interface SingleFileUploadWithProgressProps {
  file: File;
  // eslint-disable-next-line no-unused-vars
  onDelete: (file: File) => void;
}

const SingleFileUploadWithProgress = ({ file, onDelete }: SingleFileUploadWithProgressProps) => {
  return (
    <Stack spacing={5}>
      <FileHeader file={file} onDelete={onDelete} />
      <Flex>
        <Box>
          <Image
            boxSize="400px"
            objectFit="cover"
            src={URL.createObjectURL(file)}
            alt="Product pic"
          />
        </Box>
      </Flex>
    </Stack>
  );
};

export default SingleFileUploadWithProgress;
