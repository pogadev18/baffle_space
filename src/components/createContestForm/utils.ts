import { FileForm } from '@/utils/createContestForm';
import Moralis from 'moralis';

// You can upload files with the saveIPFS() method (max file size 1 GB).

// upload images to IPFS and return me a promise with the results (URLs of the images)
export const uploadImagesToIPFS = async (files: FileForm[]): Promise<Moralis.File[] | string[]> => {
  try {
    const uploadPromises = files.map(({ file }) => {
      // @ts-ignore
      const fileToSave = new Moralis.File('contest image', file);

      return fileToSave.saveIPFS();
    });

    return await Promise.all(uploadPromises);
  } catch (e) {
    return ['something went wrong while uploading to IPFS'];
  }
};
