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
    instagram: loggedInUser?.userData?.instagram || '',
    tiktok: loggedInUser?.userData?.tiktok || '',
    twitter: loggedInUser?.userData.twitter || '',
    facebook: loggedInUser?.userData.facebook || '',
  };
};

export const validationSchema = Yup.object().shape({
  instagram: Yup.string(),
  tiktok: Yup.string(),
  twitter: Yup.string(),
  facebook: Yup.string(),
});
