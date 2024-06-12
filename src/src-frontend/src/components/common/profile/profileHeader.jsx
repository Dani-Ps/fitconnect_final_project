import React, { useContext } from 'react';
import { ThemeContext } from "../../../contexts/ThemeProvider";
import ProfilePictureComponent from "../../layout/navbar/components/profilePicture/profilePicture";
import './style.scss';

const ProfileHeader = ({ user }) => {
    const { theme } = useContext(ThemeContext);
    const friendList = user?.friends
    const friendAmount = friendList?.length;
    const profileImage = user?.image;

    return (
        <div className="profile-header-container">
            <div className="picturne-name-container">
                <div className="picture-container">
                    <ProfilePictureComponent source={profileImage} size={50} />
                </div>
                <div className="name-container"><h2 style={{ color: theme.teal10 }}>{user?.name}</h2>
                    <span style={{ color: theme.gray10 }}>age: {user?.age}</span>
                </div>
            </div>
            <div className="friends-count">
                <h3 style={{ color: theme.teal10 }}>Friends</h3>
                <div style={{ color: theme.gray11 }}>{friendAmount}</div>
            </div>
        </div>
    );
};
export default ProfileHeader;