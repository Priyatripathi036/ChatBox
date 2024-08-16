import {useState} from "react";
import axios, {Axios} from "axios";


const LoginForm = ( ) => {
   const [username, setUsername] = useState('');
   const [password, setpassword] = useState('');
   const [error, seterror] = useState('');

   const handleSubmit = async (e) => {
   e.preventDefault();

   const authObject = {'Project-ID' : "788a4293-c0df-4bf6-9e71-ccef427e44bb", 'User-Name': username , 'User-Secret ' : password};
   
   try {
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });
         
        
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

         window.location.reload();


    } catch (error) {
    seterror('Oops, incorrect credentials.')

   }
}

return(
<div className="wrapper">
    <div className="form">
               <h1 className="title"> Chat Hub</h1>
               <form onSubmit={handleSubmit}>
<input type="text"
value={username}
onChange={(e) => setUsername(e.target.value)} className="input"
placeholder="Username" required

/>
<input type="password"
value={password}
onChange={(e) => setpassword(e.target.value)} className="input"
placeholder="password" required

/>

<div align ="center">
    <button type='submit' className="button">
     <span> Start Chatting</span>

    </button>


</div>
<h2 className="error">{error}  </h2>
               </form>
    </div>
</div>

);

}

export default LoginForm;