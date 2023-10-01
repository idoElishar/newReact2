import React, { useContext } from 'react';
import { UserContext } from './context';
const GrandChildComponent: React.FC = () => {
    const context = useContext(UserContext);
    if (!context) return null;
    const { setText } = context
    return (
        <div >
            <h4>GrandChild</h4>
            <button onClick={() => setText("hello my name is ido")}>Change User</button>
        </div >
    );
};
export default GrandChildComponent;