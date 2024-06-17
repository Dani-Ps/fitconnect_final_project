import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeProvider';

const Skeleton = ({ mainContent, footerContent, currentPath }) => {
    const { theme } = useContext(ThemeContext);

    const getBackgroundColor = (path) => {
        switch (path) {
            case '/login':
            case '/register':
                return theme.backgroundGradient;
            default:
                return theme.colorBackground;
        }
    };

    const getContainerClass = (path) => {
        switch (path) {
            case '/login':
            case '/register':
                return 'special-container';
            default:
                return 'body-container';
        }
    };

    return (
        <div className={getContainerClass(currentPath)} style={{ background: getBackgroundColor(currentPath) }}>
            <main>{mainContent}</main>
            <footer>{footerContent}</footer>
        </div>
    );
};

export default Skeleton;
