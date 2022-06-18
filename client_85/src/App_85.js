import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'


import {
  Landing_85,
  Dashboard_85, 
  Register_85, 
  Error_85, 
  ProtectedRoute_85,
  TestFetchUseCors_85, 
  TestFetchUseProxy_85,
} from './pages';

import {
  AddJob_85,
  AllJobs_85,
  Profile_85,
  Stats_85,
  SharedLayout_85,
} from './pages/dashboard';

import styled from 'styled-components';

function App_85() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path='/'
          element={
            <ProtectedRoute_85>
              <SharedLayout_85 />
            </ProtectedRoute_85>
          }
        >
          <Route index element={<Stats_85 />} />
          <Route path='profile' element={<Profile_85 />} />
          <Route path='add-job' element={<AddJob_85 />} />
          <Route path='all-jobs' element={<AllJobs_85 />} />
        </Route>
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
