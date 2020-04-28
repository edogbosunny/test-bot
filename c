import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import axios from 'axios';

class SearchableDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      data: [],
      error: ''
    };
  }

  async makeRemoteRequest() {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const a = await axios.get(url)
    this.setState({
      data: a.data,
    });
  };

  renderSeparator = () => {  
    return (  
        <View  
            style={{  
                height: 1,  
                width: "100%",  
                backgroundColor: "#000",  
            }}  
        />  
    );  
  };  
  


  render() {
    this.makeRemoteRequest()
    // console.log('props', this.state);
    return (
      <View style={styles.main}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Text>Input chips with z index- 0</Text>
        <View style={styles.dropDown}>
          <Text >Headache with zindex 1</Text>
          <FlatList
            data={this.props.data}
            renderItem={({item}) => {
              console.log('---->', item);
              return (
                <Text style={styles.item}
                  onPress={this.getListViewItem.bind(this, item)}>
                  {item.key}
                </Text>
              )
            }
            }
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    top: 200,
    // justifyContent: 'center',
    flex: 1,
    alignItems: 'center'

  },
  dropDown: {
    zIndex: 1,
    position: 'absolute',
    top: 60,
    borderWidth: 1,
    margin: 'auto',
    width: 300,
    height: 50
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default SearchableDropDown;
