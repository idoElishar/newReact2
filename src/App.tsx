import { useState } from 'react'
import UserContextProvider from './comp/context3'
import UserContextProvider2 from './comp/context2'

import './App.css'
import ChildComponent from './comp/Child'
import ThemeSwitcher from './comp/ThemeSwitcher'
import Header from './comp/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider2>
      <UserContextProvider>
        <Header/>
      </UserContextProvider>
      </UserContextProvider2>
    </>
  )
}

export default App
