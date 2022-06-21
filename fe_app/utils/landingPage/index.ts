import * as Yup from 'yup';

export interface SocialsFormValues {
  instagram: string;
  tiktok: string;
  twitter: string;
  facebook: string;
}

export const socialsInitialValues = {
  instagram: '',
  tiktok: '',
  twitter: '',
  facebook: '',
};

export const validationSchema = Yup.object().shape({
  instagram: Yup.string(),
  tiktok: Yup.string(),
  twitter: Yup.string(),
  facebook: Yup.string(),
});
