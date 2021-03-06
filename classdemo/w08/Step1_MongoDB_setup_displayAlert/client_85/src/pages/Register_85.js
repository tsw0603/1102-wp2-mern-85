import {useState,useEffect} from 'react';
import{Logo_85,FormRow_85} from'../components/'
import Wrapper from '../assets/wrappers/Register_85'

import { useAppContext } from '../context/appContext_85';
import Alert_85 from '../components/Alert_85';

const initialState={
    name:"",
    email: '',
    password:'',
    isMember:true,
    showAlert:false
}

const Register_85 = () => {
    const [values,setValues]=useState(initialState);

    const { showAlert, displayAlert} = useAppContext();
    
    const handleChange=(e)=>{
        console.log('e.target',e.target);
        setValues({...values,[e.target.name]:e.target.value})
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        //console.log('e.target',e.target);
        const { email,password } = values;
        if(!email || !password) {
          displayAlert();
          return;
        }
    };
  return (

    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
    <Logo_85/>
    <h1>Register</h1>
    {showAlert && <Alert_85 />}
    <FormRow_85
     type="text"
     name='name'
     value={values.name}
     handleChange={handleChange}
     className='form-input'
    />
     <FormRow_85
     type="email"
     name='email'
     value={values.email}
     handleChange={handleChange}
     className='form-input'
    />
      <FormRow_85
     type="password"
     name='password'
     value={values.password}
     handleChange={handleChange}
     className='form-input'
    />

   <button className='btn btn-block' type="submit">
       submit
   </button>
   
      </form>
    </Wrapper>
  )
}

export default Register_85
