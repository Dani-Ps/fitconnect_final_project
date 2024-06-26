import React, { useState, useEffect, useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeProvider.js';
import { useScreenContext } from '../../contexts/ScreenProvider.js';
import { useAuthContext } from '../../contexts/AuthProvider.js';
import { useModalContext } from '../../contexts/ModalProvider.js';

import Skeleton from '../../components/layout/skeleton/skeleton.jsx';
import { Header } from '../../components/layout/header/header.jsx';
import { FooterBarComponent, SidebarComponent } from '../../components/layout/navbar/navbar.jsx';
import ActivityPostComponent from '../../components/common/activity/activityPost.jsx';
import FooterComponent from '../../components/layout/footer/footer.jsx';
import { ToggleButton } from '../../components/common/buttons/buttons.jsx';
import AddActivityForm from '../../components/common/addActivity/addActivityCard.jsx';
import SearchModal from '../../components/common/search/searchModal.jsx';
import { LogoiconDark } from '../../assest/icon/logo-dark';
import { LogoiconClear } from '../../assest/icon/logo-clear';
import { LogoutClear } from '../../assest/icon/sidebarIcons-clear.jsx';
import { LogoutDark } from '../../assest/icon/sidebarIcons-dark.jsx';

const HomePage = () => {
    // CONTEXTS
    const { isDark, theme } = useContext(ThemeContext);
    const { screenWidth } = useScreenContext();
    const { logout } = useAuthContext();
    const { isModalOpen } = useModalContext();
    const isAddModalOpen = isModalOpen('addModal');
    const isSearchModalOpen = isModalOpen('searchModal');
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
                        <div>
                            <ActivityPostComponent />
                            {isAddModalOpen && <AddActivityForm />}
                            {isSearchModalOpen && <SearchModal />}
                            <FooterBarComponent />
                        </div>
                    </>
                }
                footerContent={<></>}

            />
        );
    }

    return (
        <Skeleton
            mainContent={
                <>
                    <div className='left-column'>
                        <SidebarComponent />
                    </div>

                    <div className="right-column">
                        <ActivityPostComponent />
                        {isAddModalOpen && <AddActivityForm />}
                        {isSearchModalOpen && <SearchModal />}
                        <FooterComponent />
                    </div>
                </>
            }
            footerContent={<></>}

        />
    );
};

export default HomePage;
