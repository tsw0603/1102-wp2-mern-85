import { useAppContext } from '../context/appContext_85';
import NavLinks from './NavLinks_85';
import Logo from '../components/Logo_85';
import Wrapper from '../assets/wrappers/BigSidebar_85';

const BigSidebar_85 = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar_85;
