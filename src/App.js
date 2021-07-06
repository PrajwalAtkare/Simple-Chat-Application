import {ChatEngine} from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";
import './App.css';
import LoginForm from './components/LoginForm';
const App = ()=>{
if (!localStorage.getItem('username')) return<LoginForm />
    
    return(
        <ChatEngine 
            height="100vh"
            projectID="f70b132a-6234-4ee2-aed0-51cb7d6ff5b8"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    );

}

export default App;