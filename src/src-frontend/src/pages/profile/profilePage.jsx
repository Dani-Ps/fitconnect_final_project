import React, { useState, useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeProvider.js';
import { useScreenContext } from '../../contexts/ScreenProvider.js';
import { useAuthContext } from '../../contexts/AuthProvider.js';
import { useModalContext } from '../../contexts/ModalProvider.js';

import Skeleton from '../../components/layout/skeleton/skeleton.jsx';
import { Header } from '../../components/layout/header/header.jsx';
import ProfileHeader from '../../components/common/profile/profileHeader.jsx';
import ProfileNav from '../../components/common/profile/nav.jsx';
import ActivityGrid from '../../components/common/profile/activityGrid.jsx';
import { FooterBarComponent, SidebarComponent } from '../../components/layout/navbar/navbar.jsx';
import FooterComponent from '../../components/layout/footer/footer.jsx';
import { ToggleButton } from '../../components/common/buttons/buttons.jsx';
import AddActivityForm from '../../components/common/addActivity/addActivityCard.jsx';
import SearchModal from '../../components/common/search/searchModal.jsx';
import { LogoiconDark } from '../../assest/icon/logo-dark';
import { LogoiconClear } from '../../assest/icon/logo-clear';
import { LogoutClear } from '../../assest/icon/sidebarIcons-clear.jsx';
import { LogoutDark } from '../../assest/icon/sidebarIcons-dark.jsx';

import './style.scss';

const ProfilePage = () => {
    // CONTEXTS
    const { isDark } = useContext(ThemeContext);
    const { screenWidth } = useScreenContext();
    const { logout, userData } = useAuthContext();
    const { isModalOpen } = useModalContext();
    const isAddModalOpen = isModalOpen('addModal');
    const isSearchModalOpen = isModalOpen('searchModal');
    const location = useLocation();

    const user = location.state?.user;

    //#region SCREEN STATE
    const [isScreenSmall, setIsScreenSmall] = useState(false);

    useEffect(() => {
        setIsScreenSmall(screenWidth <= 770);
    }, [screenWidth]);
    //#endregion

    const handleLogoutClick = () => {
        logout();
        window.location.href = '/';
    };

    const svgLogoIconProps = {
        width: 45,
        height: 45,
        className: "logo-icon-header",
        viewBox: "0 0 100 100",
    };

    const Logout = isDark ? <LogoutDark /> : <LogoutClear />
    const headerLeftContent = isDark ? <LogoiconDark {...svgLogoIconProps} /> : <LogoiconClear  {...svgLogoIconProps} />;



    if (isScreenSmall) {
        return (
            <Skeleton
                mainContent={
                    <>
                        <Header
                            leftContent={headerLeftContent}
                            rightContent={
                                <>
                                    <ToggleButton />
                                    <div className='icon-btn' onClick={handleLogoutClick}>{Logout}</div>
                                </>}
                        />
                        <div className="main-content">
                            <div className='profile-main-container'>
                                <ProfileHeader user={user} />
                                <ProfileNav />
                                <ActivityGrid userId={user.id} token={userData.token} />
                                {isAddModalOpen && <AddActivityForm />}
                                {isSearchModalOpen && <SearchModal />}
                            </div>
                        </div>
                    </>
                }
                footerContent={<FooterBarComponent />}
            />
        );
    }

    return (
        <Skeleton
            mainContent={
                <>
                    <SidebarComponent />
                    <div className="main-content">
                        <div className='profile-main-container'>
                            <ProfileHeader user={user} />
                            <ProfileNav />
                            <ActivityGrid userId={user.id} token={userData.token} />
                            {isAddModalOpen && <AddActivityForm />}
                            {isSearchModalOpen && <SearchModal />}
                        </div>
                    </div>
                </>
            }
            footerContent={<FooterComponent />}
        />
    );
};
export default ProfilePage;