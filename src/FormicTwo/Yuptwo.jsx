import * as Yup from 'yup'

export const YuptwoValidation = Yup.object({
      name:Yup.string().min(4, 'Too Short').max(18,'Too Long').required('Usename Empty Field is not allowed'),     
      myage:Yup.string().min(18, 'Not Allow To Work').max(75,'You Have Retired Person').required('Age Empty Field is not allowed'),
      myemail:Yup.string().required('Email Empty Field is not allowed'),
      mypass:Yup.string().required('password is required')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'Password Must be Minimum eight characters, at least one letter and one number'),
  
})