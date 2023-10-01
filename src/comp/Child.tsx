import React, { useContext } from 'react';
import { UserContext } from './context';
import GrandChildComponent from './GrandChild';
const ChildComponent: React.FC = () => {
    const context = useContext(UserContext);
    if (!context) return null;
    const Objtext = context
    console.log(Objtext.text);

    return (
        <div >
            <h4>Child</h4>
            <p>{Objtext.text}</p>
            <GrandChildComponent/>
        </div>
    );
}

export default ChildComponent;