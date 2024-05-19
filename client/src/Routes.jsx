import { useContext } from 'react'
import RegisterandLoginform from './RegisterandLoginform'
import { UserContext } from './UserContext'
import Chat from './Chat'

const Routes = () => {
    const {username, id}=useContext(UserContext);
    if(username){
        return <Chat/>;
    }
    
  return (
    <RegisterandLoginform/>
  )
}

export default Routes