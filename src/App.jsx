import {useState, useMemo} from 'react'
import Header from "./components/Header/Header.jsx";
import UserCard from "./components/UserCard/UserCard.jsx";
import getInfo from "./utils/getInfo.js";
import UserContext from "./Contexts/UserContext.js";
import { QueryClient, QueryClientProvider } from "react-query";
import CryptoTracker from "./components/BitcoinChart/CryptoTracker.jsx";

function App() {
    const [User, setUser] = useState({})
    useMemo(() => {
        getInfo('http://localhost:3000/user').then((data) => setUser(data));
    }, []);
    const queryClient = new QueryClient();

    return (
   <div>
       <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{User}}>
            <Header/>
            <UserCard/>
            <CryptoTracker cryptoName="bitcoin" />
            <CryptoTracker cryptoName="ethereum" />
            <CryptoTracker cryptoName="dogecoin" />
            <CryptoTracker cryptoName="solana" />
        </UserContext.Provider>
       </QueryClientProvider>

   </div>
  )
}

export default App
