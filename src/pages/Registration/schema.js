import * as yup from 'yup';

const schema = yup.object({
    fullName: yup
        .string()
        .min(2, 'Full name should be at least 2 characters')
        .required('Full name is a required field'),
    email: yup
        .string()
        .trim()
        .email('Email must be a valid email')
        .required('Email is a required field'),
    dateOfBirth: yup.string().required('Date of birth is a required field'),
    resource: yup
        .string()
        .required('Where you hear about event is a required field'),
});

export default schema;
