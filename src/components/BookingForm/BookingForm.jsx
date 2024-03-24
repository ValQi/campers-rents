import { Form, Formik } from 'formik';
import { UserSchema } from '../helpers/FormShema';

import {
  StyledMessage,
  CustomTextArea,
  StyledButton,
  FormWrapper,
  FormTitle,
  Information,
  BookingLabel,
  InputArea,
  Wrapper,
} from './BookingForm.styled';

export const BookingForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  return (
    <Wrapper>
      <FormWrapper>
        <FormTitle>Book your campervan now</FormTitle>
        <Information>Stay connected! We are always ready to help you.</Information>
        <Formik
          initialValues={initialValues}
          validationSchema={UserSchema}
          onSubmit={(values, { setSubmitting }) => {
            if (!values || !values.isValid) {
              console.log("Form is invalid");
              setSubmitting(false);
              return;
            }

            console.log(values);
            setSubmitting(false);
          }}
          enableReinitialize={true}
        >
          {({ errors, touched, isValid }) => (
            <Form>
              <BookingLabel>
                <InputArea
                  name="name"
                  type="text"
                  autoComplete="off"
                  placeholder="Name"
                />
                {errors.name && touched.name && (
                  <StyledMessage>{errors.name}</StyledMessage>
                )}
              </BookingLabel>
              <BookingLabel>
                <InputArea
                  name="email"
                  type="text"
                  autoComplete="off"
                  placeholder="Email"
                />
                {errors.email && touched.email && (
                  <StyledMessage>{errors.email}</StyledMessage>
                )}
              </BookingLabel>
              <BookingLabel>
                <InputArea
                  name="bookingDate"
                  type="text"
                  autoComplete="off"
                  placeholder="Booking Date"
                />
                {errors.bookingDate && touched.bookingDate && (
                  <StyledMessage>{errors.bookingDate}</StyledMessage>
                )}
              </BookingLabel>
              <BookingLabel>
                <CustomTextArea
                  name="comment"
                  placeholder="Comment"
                />
                {errors.comment && touched.comment && (
                  <StyledMessage>{errors.comment}</StyledMessage>
                )}
              </BookingLabel>
              <StyledButton type="submit" disabled={!isValid}>
                Send
              </StyledButton>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </Wrapper>
  );
};
