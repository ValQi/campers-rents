import * as Yup from 'yup';

export const UserSchema = Yup.object().shape({
  name: Yup.string().required('The name is required!'),
  email: Yup.string().email('Invalid email address!').required('Required!'),
  bookingDate: Yup.date().required('Please choose date!'),
});