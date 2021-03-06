import { useEffect, useCallback, useState } from 'react';
import { useDropzone, FileRejection, FileError } from 'react-dropzone';
import { useField } from 'formik';
import { uid } from 'uid';

import SingleFileUploadWithProgress from '@/root/components/uploadFIles/singleFileUploadWithProgress';
import UploadError from '@/root/components/uploadFIles/uploadError';

export interface UploadableFile {
  file: File;
  errors: FileError[];
  url?: string;
}

const MultipleFileUploadFields = ({ name }: { name: string }) => {
  const [, , helpers] = useField(name);
  const [files, setFiles] = useState<UploadableFile[]>([]);

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    const mappedRej = rejFiles.map((r) => ({ ...r, id: uid() }));

    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': [],
    },
    maxSize: 5242880, // 5MB
  });

  const onDelete = (file: File) => {
    setFiles((currentFiles) => currentFiles.filter((fw) => fw.file !== file));
  };

  useEffect(() => {
    helpers.setValue(files);
    helpers.setTouched(true);
  }, [files]);

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />

        <p>Drag and drop some files here, or click to select files</p>
      </div>

      {files.map((fileWrapper) => (
        <div>
          {fileWrapper.errors.length ? (
            <UploadError
              key={fileWrapper.file.name}
              file={fileWrapper.file}
              errors={fileWrapper.errors}
              onDelete={onDelete}
            />
          ) : (
            <SingleFileUploadWithProgress
              onDelete={onDelete}
              key={fileWrapper.file.name}
              file={fileWrapper.file}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default MultipleFileUploadFields;
