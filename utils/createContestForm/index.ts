import * as Yup from 'yup';

export interface FileForm {
  url: string;
  errors: string[];
  file: {
    type: string;
    size: string;
    name: string;
  };
}
export interface CreateContestFormValues {
  description: string;
  files: FileForm[];
}

export const createContestFormInitialValues = {
  description: '',
  files: [],
};

export const validationSchema = Yup.object().shape({
  description: Yup.string().required('Please add a description'),
  // files: Yup.array().min(2, 'Please upload at least 2 images'),
  // files: Yup.array(),
});
