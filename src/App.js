import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Dialog from "./components/Dialog/Dialog";
import Sender from "./components/Sender/Sender";

const App = () => {
  const [ message, addMessage ] = useState(null);

  return (
    <div className="container">
        <Header />
        <Dialog newMessage={message}/>
        <Sender onAddMessage={addMessage}/>
    </div>
  )
}

export default App;
