import Wrapper from '../assets/wrappers/SmallSidebar_85';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext_85';
import Logo_85 from './Logo_85';
import NavLinks_85 from './NavLinks_85';

const SmallSidebar_85 = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo_85 />
          </header>
          <NavLinks_85 toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar_85;
