import React from 'react';
import ImageComponent from '../components/general/ImageComponent';

const AppLogo = ({loggedIn}) => {

    return (
        <a href={loggedIn ? '/dashboard' : '/'}>
            <ImageComponent src="images/timber_icon_bgless.png" />
        </a>
    )
}

export default AppLogo;