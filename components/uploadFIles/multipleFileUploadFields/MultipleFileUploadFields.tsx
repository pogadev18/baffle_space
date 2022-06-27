import { useCallback, useState } from 'react';
import { useDropzone, FileRejection, FileError } from 'react-dropzone';
import SingleFileUploadWithProgress from '@/components/uploadFIles/singleFileUploadWithProgress';

export interface UploadableFile {
  file: File;
  errors: FileError[];
  url?: string;
}

const MultipleFileUploadFields = () => {
  const [files, setFiles] = useState<UploadableFile[]>([]);

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    console.log(rejFiles);
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onDelete = (file: File) => {
    setFiles((currentFiles) => currentFiles.filter((fw) => fw.file !== file));
  };

  const onUpload = (file: File, url: string) => {
    setFiles((currentFiles) =>
      currentFiles.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      }),
    );
  };

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />

        <p>Drag and drop some files here, or click to select files</p>
      </div>

      {JSON.stringify(files)}
      {files.map((fileWrapper) => (
        <SingleFileUploadWithProgress
          onUpload={onUpload}
          onDelete={onDelete}
          key={fileWrapper.file.name}
          file={fileWrapper.file}
        />
      ))}
    </>
  );
};

export default MultipleFileUploadFields;
