import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

import { Navbar_85, BigSidebar_85, SmallSidebar_85 } from '../../components';

const SharedLayout_85 = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar_85 />
        <BigSidebar_85 />
        <div>
          <Navbar_85 />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout_85;

/*
const SharedLayout_85 = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-job'>add job</Link>
        <Link to='all-jobs'>all jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
*/
