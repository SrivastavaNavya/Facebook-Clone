import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Avatar from "@mui/material/Avatar"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';


function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className='header'>
      <div className="header-left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019.svg.png" alt="" />
        <div className="header-input">
          <SearchIcon />
          <input placeholder='Search UnityNet' type="text" />
        </div>
      </div>
      <div className="header-mid">
        <div className="header-option header-option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header-option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header-option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header-right">
        <div className="header-info">
          < Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header

