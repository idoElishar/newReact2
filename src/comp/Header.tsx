import React, { useContext } from 'react'
import { UserContext } from './context3';
import ThemeSwitcher from './ThemeSwitcher';
import Main from './Main';
function Header() {
    const context = useContext(UserContext);
    if (!context) return null;
    const Objtext = context
    console.log(Objtext.user);
    return (
        <div>
            <h2>{Objtext.user?.username}</h2>
            <Main />
            <ThemeSwitcher />
        </div>
    )
}

export default Header
