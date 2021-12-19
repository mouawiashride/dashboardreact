import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import {Link} from 'react-router-dom'
import './user.css'

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">
                    Edit User
                </h1>
                <Link to='newUser'>
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                         <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="userShowImg" />
                         <div className="userShowTopTitle">
                             <span className="userShowUsername">ser tye</span>
                             <span className="userShowUserTitle">front-end </span>
                         </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">sertye584</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">10-5-2054</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+ 963 967916865</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">ser@great.com</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">Damascus</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                  <span className="userUpdateTitle">Edit</span>
                  <form  className="userUpdateForm">
                      <div className="userUpdateLeft">
                          <div className="userUpdateItem">
                              <label>Username</label>
                              <input 
                              type='text'
                               placeholder='sertye584 ' 
                              className='userUpdateInput' />
                          </div>
                          <div className="userUpdateItem">
                              <label>Full Name</label>
                              <input 
                              type='text'
                               placeholder='ser tye' 
                              className='userUpdateInput' />
                          </div>
                          <div className="userUpdateItem">
                              <label>Email</label>
                              <input 
                              type='text'
                               placeholder='ser@great.com  '
                              className='userUpdateInput' />
                          </div>
                          <div className="userUpdateItem">
                              <label>Phone</label>
                              <input 
                              type='text'
                               placeholder='+ 963 967916865 ' 
                              className='userUpdateInput' />
                          </div>
                          <div className="userUpdateItem">
                              <label>Address</label>
                              <input 
                              type='text'
                               placeholder='Damascus  ' 
                              className='userUpdateInput' />
                          </div>
                      </div>
                      <div className="userUpdateRight">
                          <div className="userUpdateUpload">
                              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className='userUpdateImg' alt="" />
                              <label htmlFor='file' ><Publish className='userUpdateIcon'/> </label>
                              <input  type='file' id='file' style={{display:'none'}} />
                          </div>
                          <button className="userUpdateButton">Update</button>
                      </div>
                  </form>
                </div>
            </div>
        </div>
    )
}
