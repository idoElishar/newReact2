import React, { createContext, useState } from 'react';


interface UserContextType {
    text: String;
    setText: React.Dispatch<React.SetStateAction<String>>;
}
interface UserContextProviderProps {
    children: React.ReactNode;
}
export const UserContext = createContext<UserContextType | null>(null);
const UserContextProvider: React.FC<UserContextProviderProps> = (props) => {
    const [text, setText] = useState<String>("hello world");
    return (
        <UserContext.Provider value={{ text, setText }}>
            {props.children}
        </UserContext.Provider>
    );
};
export default UserContextProvider;