import React, { useState, useEffect, useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeProvider.js';
import { useScreenContext } from '../../contexts/ScreenProvider.js';
import { useAuthContext } from '../../contexts/AuthProvider.js';
import { useModalContext } from '../../contexts/ModalProvider.js';

import Skeleton from '../../components/layout/skeleton/skeleton.jsx';
import { Header } from '../../components/layout/header/header.jsx';
import UserAgeChart from './components/chart/userAgeChart.jsx';
import { FooterBarComponent, SidebarComponent } from '../../components/layout/navbar/navbar.jsx';
import { ToggleButton } from './components/buttons/buttons.jsx';
import { LogoiconDark } from '../../assest/icon/logo-dark';
import { LogoiconClear } from '../../assest/icon/logo-clear';
import { LogoutClear } from '../../assest/icon/sidebarIcons-clear.jsx';
import { LogoutDark } from '../../assest/icon/sidebarIcons-dark.jsx';
import SearchModal from '../../components/common/search/searchModal.jsx';

import "./style.scss"

const DashboardPage = () => {
    // CONTEXTS
    const { isDark, theme } = useContext(ThemeContext);
    const { screenWidth } = useScreenContext();
    const { logout, userData, update } = useAuthContext();
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
                        <div className="main-content">
                            <div className='dashboard-container'>
                                <div className='title' >
                                    <h2 style={{ color: theme.gray12 }}>Dashboard</h2>
                                </div>
                                <div className='barUser-chart'>
                                    <UserAgeChart />
                                </div>
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
                        <div className='dashboard-container'>
                            <div className='title' >
                                <h1 style={{ color: theme.gray12 }}>Dashboard</h1>
                            </div>
                            <div className='barUser-chart'>
                                <UserAgeChart />
                                {isSearchModalOpen && <SearchModal />}

                            </div>

                        </div>
                    </div>
                </>
            }
            footerContent={<></>}
        />
    );
};

export default DashboardPage