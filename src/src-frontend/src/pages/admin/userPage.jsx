import React, { useState, useEffect, useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeProvider.js';
import { useScreenContext } from '../../contexts/ScreenProvider.js';
import { useAuthContext } from '../../contexts/AuthProvider.js';
import { useModalContext } from '../../contexts/ModalProvider.js';

import Skeleton from '../../components/layout/skeleton/skeleton.jsx';
import { Header } from '../../components/layout/header/header.jsx';
import UserTable from '../../components/common/table/userTable.jsx';
import { FooterBarComponent, SidebarComponent } from '../../components/layout/navbar/navbar.jsx';
import { ToggleButton } from './components/buttons/buttons.jsx';
import { LogoiconDark } from '../../assest/icon/logo-dark';
import { LogoiconClear } from '../../assest/icon/logo-clear';
import { LogoutClear } from '../../assest/icon/sidebarIcons-clear.jsx';
import { LogoutDark } from '../../assest/icon/sidebarIcons-dark.jsx';
import SearchModal from '../../components/common/search/searchModal.jsx';

import "./style.scss"

const UsersPage = () => {
    // CONTEXTS
    const { isDark, theme } = useContext(ThemeContext);
    const { screenWidth } = useScreenContext();
    const { logout } = useAuthContext();
    const { isModalOpen } = useModalContext();
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
                        <div className="dashboard-container">
                            <div className='title' >
                                <h2 style={{ color: theme.gray12 }}>User Managment</h2>
                            </div>
                            <div className='table-container'>
                                <UserTable />
                            </div>
                            {isSearchModalOpen && <SearchModal />}

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
                    <div className='left-column'>
                        <SidebarComponent />
                    </div>
                    <div className='right-column table-container'>
                        <div className='title' >
                            <h1 style={{ color: theme.gray12 }}>User Managment</h1>
                        </div>
                        <div className='table-content'>
                            <UserTable />
                        </div>
                        {isSearchModalOpen && <SearchModal />}
                    </div>
                </>
            }
            footerContent={<></>}
        />
    );
};

export default UsersPage;