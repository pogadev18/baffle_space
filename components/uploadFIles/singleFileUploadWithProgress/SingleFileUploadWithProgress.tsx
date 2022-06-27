import React, { useEffect, useState } from 'react';
import { Progress } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/layout';

import FileHeader from '@/components/uploadFIles/fileHeader';
import { uploadFile } from '@/utils/createContestForm';

export interface SingleFileUploadWithProgressProps {
  file: File;
  // eslint-disable-next-line no-unused-vars
  onDelete: (file: File) => void;
  // eslint-disable-next-line no-unused-vars
  onUpload: (file: File, url: string) => void;
}

const SingleFileUploadWithProgress = ({
  file,
  onDelete,
  onUpload,
}: SingleFileUploadWithProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const upload = async () => {
      const url = await uploadFile(file, setProgress);
      onUpload(file, url);
    };

    upload();
  }, []);

  return (
    <Stack spacing={5}>
      <FileHeader file={file} onDelete={onDelete} />
      <Progress size="md" colorScheme="green" value={progress} />
    </Stack>
  );
};

export default SingleFileUploadWithProgress;
