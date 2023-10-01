import { UserContext } from './context2';
import React, { useContext } from 'react'

function Text1() {
    const context = useContext(UserContext);

  return (
    <div style={{background:context?.color } }>
        <h3 style={{ color: context?.color === 'black' ? 'white' : 'black' }}>
        this is a {context?.color} div
      </h3>
    </div>
  )
}

export default Text1
