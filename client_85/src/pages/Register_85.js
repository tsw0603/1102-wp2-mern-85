import {useState,useEffect} from 'react';
import{Logo_85,FormRow_85,Alert_85} from'../components/'
import Wrapper from '../assets/wrappers/Register_85'

import { useAppContext } from '../context/appContext_85';
import { useNavigate } from 'react-router-dom';

const initialState={
    name:"",
    email: '',
    password:'',
    isMember:true,
    showAlert:false
}

const Register_85 = () => {
    const [values,setValues]=useState(initialState);
    const navigate = useNavigate();

    const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } = useAppContext();

    const toggleMember = () => {
      setValues( {...values, isMember: !values.isMember} );
    }
    
    const handleChange=(e)=>{
        //console.log('e.target',e.target);
        setValues({...values,[e.target.name]:e.target.value})
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        //console.log('e.target',e.target);
        const {name,email,password,isMember} =values;
        if(!email||!password || !isMember &&!name) {
          displayAlert();
          return;
        }
        const currentUser = {name,email,password};
        console.log('form data',currentUser);
        if(!isMember){
          registerUser({
            currentUser,
            endPoint:'register_85',
            alertText:'User created! Redirecting ...'

          });
        }else{
         loginUser({
           currentUser,
           endPoint:'login_85',
           alertText:'Login Successful! redirecting ...',
         });
        }
    };

    useEffect(() => {
      if (user) {
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }
    }, [user, navigate]);

  return (

    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
    <Logo_85/>
    <h3> { values.isMember ? 'Login' : 'Register'} </h3>
    {showAlert && <Alert_85 />}
    {/* name input */}
    {!values.isMember && (
      <FormRow_85
        type="text"
        name='name'
        value={values.name}
        handleChange={handleChange}
        className='form-input'
    />
    ) }
    {/* email input */}
     <FormRow_85
     type="email"
     name='email'
     value={values.email}
     handleChange={handleChange}
     className='form-input'
    />

    {/* password input */}
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
      <p>
        {values.isMember ? 'Not a member yet?' : 'Already a member?'}
        <button type='button' className='member-btn' onClick={toggleMember}>
          {values.isMember ? 'Register' : 'Login'}</button>
      </p>      
      </form>
    </Wrapper>
  )
}

export default Register_85
