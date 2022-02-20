import React from 'react';
import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const projectID = "9a33e36c-adfd-4357-9fb2-3c28ba7097cb";

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>

  );
}

export default App;
