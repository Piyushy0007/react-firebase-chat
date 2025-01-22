import { useEffect } from "react";
import Chat from "./Components/chat/chat"
import Details from "./Components/details/details"
import List from "./Components/list/list"
import Login from "./Components/login/login";
import Notification from "./Components/Notification/notification";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./lib/firebase";
import {useUserStore} from "./lib/userStore"


const App = () => {

  const {currentUser,isLoading,fetchUserInfo} = useUserStore()

  useEffect(()=>{
    const unSub= onAuthStateChanged(auth, (user)=>{
      fetchUserInfo(user.uid);
    } ); 

    return ()=>{
      unSub();
    };

  },[fetchUserInfo]);

  

  if(isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
    {currentUser ? (<>
      <List/>
      <Chat/>
      
      <Details/>
    </>):(
      <Login/>

    )}

    <Notification/>

    </div>
  )
}

export default App