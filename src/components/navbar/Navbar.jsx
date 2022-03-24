import './navbar.scss'
// material icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { DarkModeOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="wrapper">
         {/* search bar */}
         <div className="search">
          <input type="search" placeholder='search....' />
          <SearchOutlinedIcon  className='icon' />
         </div>
         {/* navbar icons */}
         <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className="item">
            <NightlightOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MessageOutlinedIcon className='icon' />
            <div className="counter">20</div>

          </div>
          <div className="item">
            <img 
              src="https://res.cloudinary.com/dvmkzbrcs/image/upload/v1647691011/My%20blog%20photos/me_compressed.jpg" alt="Ahmed Elgaidi" 
              className='avatar'
            />
          </div>
         </div>
       </div>
    </div>
  );
}

export default Navbar