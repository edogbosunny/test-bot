
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import axios from 'axios'
// import { connect } from 'react-redux';
// import DatePicker from 'react-native-date-picker'

// import { BotImage } from '../../assets/images/dataImage'
// import { patientsAge } from '../../redux/actions'
// import { ageCalculator } from '../../utils/ageCalculator';

class TestComponentScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: this.props.stepIndex,
      loading: true,
      value: '',
      trigger: '1',
      steps: this.props.steps,
      waitAction: this.props.step.waitAction,
      date: new Date(),
      onChangeDate: '',
      data: undefined
      // delay: 4000
    };
  }
  a = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('-->', data)
    this.setState({ data })
    return data
  }

  componentDidMount() {
    this.a();
  }

  render() {

    console.log('-v-v-v->', this.state.data);
    setTimeout(() => {
      this.props.triggerNextStep(this.state);
    }, 4000);
    // const age = ageCalculator(this.state.onChangeDate);
    // console.log('pop', this.props)
    return (
      <View>
        <Text style={this.styles.textViewDimensions}>
         hello world
        </Text>
      </View>
    );
  }

  styles = StyleSheet.create({
    customBotImage: {
      width: 60,
      height: 60,
      marginTop: 20,
      marginBottom: 20
    },
    textViewDimensions: {
      paddingLeft: 15,
      fontSize: 17,
      lineHeight: 22,
    },
    textMargin: {
      paddingLeft: 15,
      paddingBottom: 10
    },
    button: {
      marginTop: 20,
      marginBottom: 30,
      alignItems: 'center',
      backgroundColor: "#00ABE2",
      color: '#000',
      padding: 10,
      width: 200,
      flex: 1,
      borderRadius: 4,
    },
    alignButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50
    },
    buttonText: {
      color: '#fff',
      fontSize: 17,
      lineHeight: 22
    }
  });
}

const mapStateToProps = (state) => {
  return {
    patientAge: state.inputDataReducer.patientsAge,
    assessmentOwnerDetails: state.inputDataReducer.assessmentOwnerDetails,
  }
};


export default TestComponentScreen1;
