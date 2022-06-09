import axios from 'axios';
import { useEffect } from 'react';

const TestFetchUseProxy_85=()=>{
    const fetchData1 = async ()=>{
   const resp =await fetch('/api/data.json');
   const data_local_json =await resp.json();
   console.log('local json data',data_local_json);
    }
    const fetchData2 = async ()=>{
   const response =await fetch('/api/v1');
   const data1 = await response.json();
   console.log('fetch data1',data1);
    }
    const fetchData3 = async ()=>{
   const data2=await axios.get('/api/v1');
   console.log('axios data2',data2.data);
    }
    const fetchData4 = async ()=>{
    const currentUser={
        
            name:"湯士緯15",
            email:"20941078515@gmail.com",
            password:"secret15"
        
    };

    try{
        const {data} = await axios.post(
            '/api/v1/auth_85/register_85',
            currentUser
        );
        console.log('register data',data);
    } catch(err){
        console.log(err);
    }
}
useEffect(()=>{
    fetchData1();
 }, []);

 useEffect(()=>{
     fetchData2();
 }, []);

 useEffect(()=>{
    fetchData3();
 }, []);
 useEffect(()=>{
    fetchData4();
 }, []);

    return <div></div>;
};

export default TestFetchUseProxy_85;