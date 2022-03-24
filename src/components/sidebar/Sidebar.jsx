import './sidebar.scss';
import { Link } from 'react-router-dom';

// material icons
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{ textDecoration: 'none'}}>
                <span className="logo">
                    Ahmed Elgaidi
                </span>
            </Link>
        </div>

        <hr />

        <div className="center">
            <ul>
                <p className="title">
                    MAIN:
                </p>
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <li>
                        <GridViewIcon className='icon' />
                        <span>
                            Dashboard
                        </span>
                    </li>
                </Link>

                {/* ------------------------- */}

                <p className="title">
                    LISTS:
                </p>
                <Link to="/users" style={{ textDecoration: 'none'}}>
                    <li>
                        <PeopleOutlinedIcon className='icon' />
                        <span>
                            Users
                        </span>
                    </li>
                </Link>
                <Link to="/products" style={{ textDecoration: 'none'}}>
                    <li>
                        <StorefrontOutlinedIcon className='icon' />
                        <span>
                            Products
                        </span>
                    </li>
                </Link>
                <li>
                    <CreditCardOutlinedIcon className='icon' />
                    <span>
                        Orders
                    </span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className='icon' />
                    <span>
                        Delivery
                    </span>
                </li>

                {/* ------------------------- */}

                <p className="title">
                    USEFUL:
                </p>
                <li>
                    <QueryStatsIcon className='icon' />
                    <span>
                        Statistics
                    </span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className='icon' />
                    <span>
                        Notifications
                    </span>
                </li>

                {/* ------------------------- */}

                <p className="title">
                    SERVICES:
                </p>
                <li>
                    <PsychologyOutlinedIcon className='icon' />
                    <span>
                        Logs
                    </span>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icon' />
                    <span>
                        Settings
                    </span>
                </li>

                {/* ------------------------- */}

                <p className="title">
                    USER:
                </p>
                <li>
                    <AccountCircleOutlinedIcon className='icon' />
                    <span>
                        Profile
                    </span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className='icon' />
                    <span>
                        Logout
                    </span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar