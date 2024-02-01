import { useFormik } from 'formik'
import React from 'react'
import { YupSchema } from './YupSchema';

function Formikone() {
    let formikInitialValues={
        name:'',email:'',password:'',ConfirmPassword:''
    }

    let formik = useFormik({
        initialValues:formikInitialValues,
        validationSchema:YupSchema,
        onSubmit:(values, action)=>{
            console.log(values);
            action.resetForm()
        }
    })
   console.log(formik);

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor=''>Enter Name</label>
                <input type='text' name='name'
                value={formik.values.name}
                onChange={formik.handleChange} 
                onBlur ={formik.handleBlur} 
                />
                {
                    formik.errors.name && formik.touched.name?
                    <h4>{formik.errors.name}</h4>: ''
                }
            </div>

            <div>
                <label htmlFor=''>Enter Email</label>
                <input type='text' name='email'
                 value={formik.values.email}  
                 onChange={formik.handleChange} 
                 onBlur ={formik.handleBlur}   
                />
                {
                    formik.errors.email && formik.touched.email?
                    <h4>{formik.errors.email}</h4>:''
                }
            </div>

            <div>
                <label htmlFor=''>Enter Password</label>
                <input type='password' name='password'
                 value={formik.values.password}
                 onChange={formik.handleChange} 
                 onBlur ={formik.handleBlur}  
                />
                {
                    formik.errors.password && formik.touched.password?
                    <h4>{formik.errors.password}</h4>:''
                }
            </div>
            
            <div>
                <label htmlFor=''>Enter ConfirmPassword</label>
                <input type='password' name='ConfirmPassword'
                 value={formik.values.ConfirmPassword}
                 onChange={formik.handleChange} 
                 onBlur ={formik.handleBlur}  
                />
                {
                    formik.errors.ConfirmPassword && formik.touched.ConfirmPassword?
                    <h4>{formik.errors.ConfirmPassword}</h4>:''
                }
            </div>

            <input type='submit' value='Submit Form'/>
        </form>
    </div>
  )
}

export default Formikone