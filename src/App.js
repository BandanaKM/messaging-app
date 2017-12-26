import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList';
import Counter from './Counter';

// allow form to select sender 

class App extends Component {

  state = {
    pendingMessage: "",
    messages: [
      {
        content: 'Hey Bana, how are you doing?',
        sent: false,
        isEditing: false
      },
      {
        content: 'I am doing well, actually.',
        sent: false,
        isEditing: false
      },
      {
        content: 'That is great.',
        sent: false,
        isEditing: true
      }
    ]
  }

  toggleMessagePropertyAt = (property, indexToChange) => 
     this.setState({
       messages: this.state.messages.map((message, index) => {
         if (index === indexToChange) {
           return {
             ...message,
             [property]: !message[property]
           };
         }
          return message;
       })
     });

  removeMessageAt = index => 
    this.setState({
      messages: [
      ...this.state.messages.slice(0, index),
      ...this.state.messages.slice(index + 1)
      ]
   })

  toggleEditingAt = index => 
    this.toggleMessagePropertyAt("isEditing", index);

  setContentAt = (content, indexToChange) => 
     this.setState({
       messages: this.state.messages.map((message, index) => {
         if (index === indexToChange) {
           return {
             ...message,
             content
           };
         }
          return message;
       })
     });

  handleMessageInput = e => 
    this.setState({pendingMessage: e.target.value});
  
  newMessageSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      messages: [
        ...this.state.messages,
       { 
         content: this.state.pendingMessage,
         isEditing: false
       }
      ],
      pendingMessage: ''
    });
  }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <div className="main">
          <MessageList 
            messages={this.state.messages}
            toggleEditingAt={this.toggleEditingAt}
            setContentAt={this.setContentAt}
            removeMessageAt={this.removeMessageAt}
            pendingMessage={this.state.pendingMessage}
          />
          <div className="participantContainer">
            <button className="participantButtonOne">Me</button>
            <button className="participantButtonTwo">Zuri</button>
          </div>
            <form onSubmit={this.newMessageSubmitHandler}>
              <input 
                type="text" 
                onChange={this.handleMessageInput}
                value={this.state.pendingMessage}
                placeholder="My Message" 
              />
              <div className="pending">
                <Counter content={this.state.pendingMessage} />
                <button type="submit" name="submit" value="submit">Submit</button>
              </div>
            </form>
        </div>
      </div>
    );
  }
}

export default App;
