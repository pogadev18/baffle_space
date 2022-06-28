import React from 'react';
import { Stack } from '@chakra-ui/layout';
import { uid } from 'uid';

import FileHeader from '@/components/uploadFIles/fileHeader';
import { storage } from '@/firebase/clientApp';
import { ref, uploadBytes } from 'firebase/storage';

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
  const handleUpload = async () => {
    try {
      const imageRef = ref(storage, `images/raffles/${file.name + uid()}`);
      await uploadBytes(imageRef, file);
      alert('upload ok!');
      onUpload(file, 'test');
    } catch (e) {
      alert('something went wrong');
    }
  };

  return (
    <Stack spacing={5}>
      <button type="button" onClick={handleUpload}>
        upload photo
      </button>
      <FileHeader file={file} onDelete={onDelete} />
      <img src={URL.createObjectURL(file)} alt="Uploaded" />
    </Stack>
  );
};

export default SingleFileUploadWithProgress;
