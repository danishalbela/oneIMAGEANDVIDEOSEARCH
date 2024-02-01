import React from 'react'
import { Formik,Form,Field, ErrorMessage } from 'formik'
import { useState } from 'react';
import { YuptwoValidation } from './yuptwo';


function Formiktwo() {
     let [data,setData] = useState({})
     console.log(data);
  return (
    <div>
       <Formik
       initialValues = {{name:'Danish', myemail:'test@.com',myage:'35',gender:'', 
       hobbies:[], country:'',mesage:'',mypass:''}}
       validationSchema={YuptwoValidation}
      
      
       onSubmit={(values)=>{
        // console.log(values)
        setData(values)
       }}
       >
       <div className='form-secton'>
       <Form>
            <div className='my-3'>
                <label htmlFor=''>UserName:: </label>
                <Field type='text' name='name'/>
                <h4 className='text-danger'><ErrorMessage name='name'/></h4>
            </div>
            <div className='my-3'>
                <label htmlFor=''>YourAge:: </label>
                <Field type='text' name='myage'/>
                
                <h4 className='text-danger'><ErrorMessage name='myage'/></h4>
            </div>
            <div className='my-3'>
                <label htmlFor=''>YourEmail:: </label>
                <Field type='text' name='myemail'/>
                
                <h4 className='text-danger'><ErrorMessage name='myemail'/></h4>
            </div>
            <div className='my-3'>
                <label htmlFor=''>Password:: </label>
                <Field type='text' name='mypass'/>
                
                <h4 className='text-danger'><ErrorMessage name='mypass'/></h4>
            </div>

            <div className='my-3'>
                <label htmlFor=''>Gender:: </label>
                
                <label htmlFor='' className='ms-3'>Male</label>
                <Field type='radio' name='gender' value='male'/>

                <label htmlFor='' className='ms-3' >Female</label>
                <Field type='radio' name='gender' value="Female"/>
                
            </div>
            <div className='my-3'>
                <label htmlFor=''>Hobbies:: </label>
                
                <label htmlFor='' className='ms-2'>Writting</label>
                <Field type='checkbox' name='hobbies' value='Writting'/>

                <label htmlFor='' className='ms-3'>Coding</label>
                <Field type='checkbox' name='hobbies'  value="Coding"/>

                <label htmlFor='' className='ms-3'>Swimming</label>
                <Field type='checkbox' name='hobbies'  value="Swimming"/>
                
            </div>

            <div className='my-3'>
                <label htmlFor=''>Country:: </label>
                <Field name='country' as='select'>
                <option value=''>Select anyone</option>
                <option value='maxico1'>maxico1</option>
                <option value='maxico2'>maxico2</option>
                <option value='maxico3'>maxico3</option>
                <option value='maxico4'>maxico4</option>
                </Field>
            </div>

            <div className='my-3'>
                <label htmlFor=''>Message:: </label>
                <Field as='textarea' name='message'/>
            </div>

            <button className='btn btn-warning' type='submit'>SUBMIT</button>
        </Form>
       </div>
       </Formik>
    </div>
  )
}

export default Formiktwo