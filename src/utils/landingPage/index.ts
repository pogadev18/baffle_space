import * as Yup from 'yup';
import Moralis from 'moralis';

export interface SocialsFormValues {
  tiktok: string;
  twitter: string;
}

export const socialsInitialValues = (loggedInUser: Moralis.User<Moralis.Attributes> | null) => {
  return {
    tiktok: loggedInUser?.get('tiktok') || '',
    twitter: loggedInUser?.get('twitter') || '',
  };
};

export const validationSchema = Yup.object().shape({
  tiktok: Yup.string(),
  twitter: Yup.string(),
});
