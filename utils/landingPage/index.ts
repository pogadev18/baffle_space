import * as Yup from 'yup';
import { DocumentData } from '@firebase/firestore';

export interface SocialsFormValues {
  instagram: string;
  tiktok: string;
  twitter: string;
  facebook: string;
}

export const socialsInitialValues = (loggedInUser: DocumentData | null) => {
  return {
    instagram: loggedInUser?.userData?.socials?.instagram || '',
    tiktok: loggedInUser?.userData?.socials?.tiktok || '',
    twitter: loggedInUser?.userData.socials?.twitter || '',
    facebook: loggedInUser?.userData.socials?.facebook || '',
  };
};

export const validationSchema = Yup.object().shape({
  instagram: Yup.string(),
  tiktok: Yup.string(),
  twitter: Yup.string(),
  facebook: Yup.string(),
});
