import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ChatBot from 'react-native-chatbot';
import TestCompoent from './testCompoent';
import TestComponentScreen1 from './testC';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  steps = [
    {
      id: '0',
      component: <TestCompoent />,
      waitAction: true,
      // delay: 4000
    },
    {
      id: '1',
      // message: 'Bye!',
      component: <TestComponentScreen1 />,
      end: true,
    },
  ];

  a = async () => {
    const a = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(a);
    return a;

  }
  render() {


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top: 30 }}>
        <ChatBot steps={this.steps} />
      </View>
    )
  }
}
export default App