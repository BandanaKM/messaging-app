import React, { Component } from 'react';
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
        initials: 'Hazuri Malik'
      },
      {
        content: 'I am doing well, actually.',
        isEditing: false,
        timeSent: Date(),
        initials: 'Bana Malik'
      },
      {
        content: 'That is great.',
        isEditing: false,
        timeSent: Date(),
        initials: 'Narinder Singh'
      }
    ]
  }


/* maps over the messages array, taking a particular message and an index value. if the index of the array is equal to the index we pass in, returns the message array and toggles the property passed in. otherwise just returns the message */

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

/* sets the isEditing value to true or false. this is passed down from App to MessageList to Message to EditContent. on an individual message, can toggle between an editState and an a saved state. */


  toggleEditingAt = index =>
    this.toggleMessagePropertyAt("isEditing", index);


/* removes a particular message object from the array of messages */

  removeMessageAt = index =>
    this.setState({
      messages: [
      ...this.state.messages.slice(0, index),
      ...this.state.messages.slice(index + 1)
      ]
   })

/* function that is called when one is editing the form. passed from App to Message to MessageList (callback function), down to EditContent */

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

/* handles change events on the form. handleMessageInput accepts an event object on change, and sets the pendingMessage property to the target's value. */

  handleMessageInput = e =>
    this.setState({pendingMessage: e.target.value});

/* newMessageSubmitHandler sets the forms state on submit. e.preventDefault prevents the default behavior, then we setState, adding a new message with the pendingMessage property, the date, the initials. */

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

/* Sets the user for a card based on a particular buttons' onClick event */

  setUser = (e, initials) => {
    this.setState({ initials });
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
            <button className="participantButtons participantButtonOne" onClick={(e) => this.setUser(e, 'Bana Malik') }>BM</button>
            <button className="participantButtons participantButtonTwo" onClick={(e) => this.setUser(e, 'Hazuri Malik') }>HK</button>
            <button className="participantButtons participantButtonThree" onClick={(e) => this.setUser(e, 'Narinder Singh') }>NS</button>
          </div>
            <form onSubmit={this.newMessageSubmitHandler}>
              <input
                type="text"
                onChange={this.handleMessageInput}
                value={this.state.pendingMessage}
                placeholder="My Message"
              />
              <div className="counter">
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
