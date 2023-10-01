import React, { useContext, useState } from 'react'
import { UserContext } from './context3';

function Main() {
    const context = useContext(UserContext);
    const [click, setClick] = useState(false);
    if (!context) return null;
    const Objtext = context

    return (
        <div>
            <h2>{Objtext.user?.name}</h2>
            <button onClick={()=>setClick(click=== false?true:false)}>click to {click=== false?"more":"hide"} details</button>
            {click&&(
                <div>
                    <p>{Objtext.user?.phone}</p>
                    <p>{Objtext.user?.email}</p>
                </div>)}
            
        </div>
    )
}

export default Main
