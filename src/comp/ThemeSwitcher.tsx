import React, { useContext } from 'react'
import { UserContext } from './context2';
import Text1 from './text1';
function ThemeSwitcher() {
    const context = useContext(UserContext);
    if (!context) return null;
    const Objtext = context
    console.log(Objtext.color);
    function changeColor() {
        Objtext.toggleTheme();
    }
    return (
        <div>
            <Text1 />
            <button onClick={changeColor}>changeColor of div</button>
        </div>
    )
}

export default ThemeSwitcher
