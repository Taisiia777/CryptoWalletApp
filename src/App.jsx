import { useState } from 'react'
import Header from "./components/header/header.jsx";
import UserCard from "./components/UserCard/UserCard.jsx";

function App() {
  const [User, setUser] = useState({
      name: 'Savelii777',
      money: 1234
  })
  return (
   <div>
        <Header User={User}/>
       <UserCard User={User}/>
   </div>
  )
}

export default App
