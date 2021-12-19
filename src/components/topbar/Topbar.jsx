import React from 'react';
import './topbar.css';
import { NotificationsNone, Language , Settings } from '@material-ui/icons';
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                  <div className="topLeft">
                       <span className='logo'>
                           i am admin
                       </span>
                  </div>
                  <div className="topRight">
                      <div className="topbarIconContainer">
                          <NotificationsNone />
                           <span className="topIconBadge">2</span>
                      </div>
                      <div className="topbarIconContainer">
                          <Language />
                      </div>
                      <div className="topbarIconContainer">
                          <Settings />
                      </div>
                      <img src="https://i.insider.com/60ee08b261b8600019f16ecf?width=700" alt="" className="topAvatar" />
                  </div>
            </div>
             
        </div>
    )
}
