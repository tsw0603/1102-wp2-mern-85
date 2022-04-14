import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//import Landing_85 from "./pages/Landing_85";
import styled from 'styled-components'
import {Landing_85, Dashboard_85, Register_85, Error_85} from './pages';

function App_85() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard_85/>}/>
        <Route path='/landing' element={<Landing_85/>} />
        <Route path='/register' element={<Register_85 />} />
        <Route path='*' element={<Error_85 />} />
      </Routes>
      {/* <Landing_85/>*/}
    </BrowserRouter>
  );
}

export default App_85;
