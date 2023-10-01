import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}


interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
interface UserContextProviderProps {
    children: React.ReactNode;
}
export const UserContext = createContext<UserContextType | null>(null);
const UserContextProvider: React.FC<UserContextProviderProps> = (props) => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        async function fetchRandomUser() {
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const users = response.data;
            const randomUser = users[Math.floor(Math.random() * users.length)];
            setUser(randomUser);
          } catch (error) {
            console.error('שגיאה בטעינת היוזר הרנדומלי:', error);
          }
        }
        fetchRandomUser();
      }, []);
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;