import * as Yup from 'yup'

export const YupSchema = Yup.object({
    name:Yup.string().min(3,"too short").max(8,"Too Long").required('Name is Required'),
    email:Yup.string().email().required('Email.is required'),
    password:Yup.string().required('password is required')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'Password Must be Minimum eight characters, at least one letter and one number'),

    ConfirmPassword:Yup.string().required('password is required')
    .oneOf([Yup.reach('password'),null],'Both Password Must Match')
})