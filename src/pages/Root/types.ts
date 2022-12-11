import { FormBuilderPostData } from 'react-form-builder2';

export interface IOutletContext {
  handleOnChange: (data: FormBuilderPostData) => void;
  formData: FormBuilderPostData;
}
