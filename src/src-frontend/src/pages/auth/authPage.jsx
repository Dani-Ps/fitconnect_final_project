import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import LoginForm from '../../components/forms/login';
import { RegisterHeader, IconHeader } from '../../components/layout/header/headers';
import FooterComponent from '../../components/layout/footer/footer';
import Skeleton from '../../components/layout/skeleton/skeleton';
import { LoginButton, RegisterButton } from '../../components/layout/buttons/buttons';
import SignupForm from '../../components/forms/signup';

import LogoiconDark from '../../assest/icons/components/logo/logoIcon-dark';
import LogoFullDark from '../../assest/icons/components/logo/logofull-dark';
import LogoFullClear from '../../assest/icons/components/logo/logofull-clear';

import { ToggleButton } from '../../components/layout/buttons/buttons';

import { ThemeContext } from '../../contexts/theme';

const AuthPage = () => {
    const { theme, isDark } = useContext(ThemeContext);
    const location = useLocation();
    const pathname = location.pathname;

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const checkScreenSize = () => {
        const isSmall = window.innerWidth <= 500 || window.innerHeight <= 500;
        setIsSmallScreen(isSmall);
    };
    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <Skeleton
            mainContent={
                <>
                    {isSmallScreen ? (
                        <IconHeader
                            leftContent={isDark ? <LogoiconDark /> : <LogoiconDark />}
                            rightContent={
                                <>
                                    <ToggleButton />
                                </>}
                        />
                    ) : (
                        <RegisterHeader
                            leftContent={isDark ? <LogoFullDark /> : <LogoFullClear />}
                            rightContent={
                                <>
                                    <ToggleButton />
                                    {pathname === '/register' ? <LoginButton /> : <RegisterButton />}

                                </>
                            } />
                    )}
                    {pathname === '/login' ? <LoginForm /> : <SignupForm />}
                </>
            }
            footerContent={<FooterComponent />}
        />
    );
};

export default AuthPage;