import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList';

// getCharacterCount
// allow form to select sender 
// time sent 

class App extends Component {

  state = {
    messages: [
      {
        content: 'Hey Bana, how are you doing?',
        pendingMessage: '',
        sent: false,
        isEditing: false
      },
      {
        content: 'I am doing well, actually.',
        sent: false,
        pendingMessage: '',
        isEditing: false
      },
      {
        content: 'That is great.',
        sent: false,
        pendingMessage: '',
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

  // getCharacterCount = () => this.state.content.length; 

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
          <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
