import React from 'react'
import Main from './ImgSearch/Main'
import Main2 from './VideoSearch/Main2'
import Main3 from './FormicOne/Main3'
import Main4 from './FormicTwo/Main4'
import TanOne from './Tanstack Table/TanOne'
import Main5 from './CachMemo/Main5'



function App() {
  return (
    <div>
    {/* image search */}
    {/* <Main/> */}
    {/* image search */}

    {/* video search */}
    {/* <Main2/> */}
    {/* video search */}
    
    {/* formik yup */}
       {/* <Main3/> */}
       {/* <Main4/> */}    
    {/* formik yup */}

    {/* tanstack table */}
       <TanOne/>
       <Main5/>
    {/* tanstack table */}

   

    </div>
  )
}

export default App