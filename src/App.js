import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList';
import Counter from './Counter';

class App extends Component {

  state = {
    pendingMessage: "",
    messages: [
      {
        content: 'Hey Bana, how are you doing?',
        isEditing: false,
        timeSent: Date(),
        initials: 'HK'
      },
      {
        content: 'I am doing well, actually.',
        isEditing: false,
        timeSent: Date(),
        initials: 'BM'
      },
      {
        content: 'That is great.',
        isEditing: false,
        timeSent: Date(),
        initials: 'HK'
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
  
  setUser = (e, initials) => {
    this.setState({ initials });
  }


  newMessageSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      messages: [
        ...this.state.messages,
       { 
         content: this.state.pendingMessage,
         isEditing: false,
         timeSent: Date(),
         initials: this.state.initials
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
            initials={this.state.initials}
          />
          <div className="participantContainer">
            <button className="participantButtonOne" onClick={(e) => this.setUser(e, 'BM') }>BM</button>
            <button className="participantButtonTwo" onClick={(e) => this.setUser(e, 'HK') }>HK</button>
            <button className="participantButtonThree" onClick={(e) => this.setUser(e, 'NS') }>NS</button>
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
