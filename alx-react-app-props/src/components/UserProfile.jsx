import React,{useContext} from "react"
import { UserContext } from "../UserContext";

function UserDetails() {
    const user = useContext(UserContext)  
    if (!user){
        return <p>No user data available</p>
    }
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  
  export default UserDetails;