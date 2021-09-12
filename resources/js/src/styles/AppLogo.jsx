import React from 'react';

const AppLogo = ({loggedIn}) => {

    return (
        <a href={loggedIn ? '/dashboard' : '/'}>
            <img src="images/timber_icon_bgless.png" alt="App Logo" height="80"/>
        </a>
    )
}

export default AppLogo;