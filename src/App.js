import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';

import  ChatFeed  from './components/ChatFeed';

import './App.css';


const App = () => {
  
   if(!localStorage.getItem('username')) return <LoginForm />

return(
    <ChatEngine 
       height="100vh"
       projectID="788a4293-c0df-4bf6-9e71-ccef427e44bb"
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed= {(chatAppProps) => <ChatFeed  {...chatAppProps}/>}
    />
  );
}

export default App;
