import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import styled from 'styled-components'
import {Landing_85, Dashboard_85, Register_85, Error_85, TestFetchUseCors_85, TestFetchUseProxy_85} from './pages';

function App_85() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard_85/>}/>
        <Route path='/landing' element={<Landing_85/>} />
        <Route path='/register' element={<Register_85 />} />
        <Route path='/testcors' element={<TestFetchUseCors_85 />} />
        <Route path='/testproxy' element={<TestFetchUseProxy_85 />} />
        <Route path='*' element={<Error_85 />} />
      </Routes>
      {/* <Landing_85/>*/}
    </BrowserRouter>
  );
}

export default App_85;
