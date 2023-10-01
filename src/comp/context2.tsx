import React, { createContext, useState } from 'react';

type Theme = 'white' | 'black';

interface ThemeContextType {
    color: Theme;
    toggleTheme: () => void;
}

interface UserContextProviderProps {
    children: React.ReactNode;
}
export const UserContext = createContext<ThemeContextType | null>(null);
const UserContextProvider2: React.FC<UserContextProviderProps> = (props) => {
    const [color, setColor] = useState<Theme>("white");
    const toggleTheme = () => {
        setColor((currentColor) => (currentColor === 'white' ? 'black' : 'white'));
    };

    return (
        <UserContext.Provider value={{ color, toggleTheme }}>
            {props.children}
        </UserContext.Provider>
    );
};
export default UserContextProvider2;