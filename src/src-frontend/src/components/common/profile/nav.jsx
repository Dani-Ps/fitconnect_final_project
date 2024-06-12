import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import { ActivityGridIconDark, ActivityGridIconClear } from "../../../assest/icon/profileIcon";
import './style.scss';
const ProfileNav = () => {
    const { theme, isDark } = useContext(ThemeContext);
    const icon = isDark ? <ActivityGridIconDark /> : <ActivityGridIconClear />

    return (
        <div className="profile-nav" style={{ background: theme.grayA2, borderColor: theme.grayA3 }}>
            {icon}<span style={{ color: theme.gray12 }}>Post</span>
        </div>
    );


};
export default ProfileNav;