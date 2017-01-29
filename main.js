import Exponent from 'exponent';
import React from 'react';
import {
  Container, Header, Button, View,
   Text, InputGroup, Input, Content, Icon
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class App extends React.Component {
  state = { grade: '',
   percent: '',
   answer: '',
   gradeTwo: '',
   percentTwo: '',
   gradeThree: '',
   percentThree: '', };

  onButtonPress() {
    const check = function (value) {
      if (value === '') {
        return 0;
      } else {
        return parseInt(value);
      }
    };

    const grade = check(this.state.grade);
    console.log(grade);
    const gradeTwo = check(this.state.gradeTwo);
    console.log(gradeTwo);
    const gradeThree = check(this.state.gradeThree);
    console.log(gradeThree);
    const percent = check(this.state.percent);
    console.log(percent);
    const percentTwo = check(this.state.percentTwo);
    console.log(percentTwo);
    const percentThree = check(this.state.percentThree);
    console.log(percentThree);

    const totalPercent = percent + percentTwo + percentThree;
    console.log(totalPercent);
    console.log("stop");
    const tPercent = 100 / totalPercent;

    const answer = (((grade * (percent / 100)) + (gradeTwo * (percentTwo / 100))
    + (gradeThree * (percentThree / 100))) * tPercent);

    this.setState({ answer }); //answer: answer (used shorthand)
  }


  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#34495e' }}>
              <Text style={{ color: 'white', fontSize: 18 }}>What is my Grade?</Text>
          </Header>

          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Content>
              <InputGroup borderType='regular' iconRight>
                <Icon name='ios-checkmark-circle' style={{ color: '#2980b9' }} />
                <Input
                  style={{ flex: 1 }}
                  placeholder='Section Grade'
                  value={this.state.grade}
                  keyboardType={'numeric'}
                  onChangeText={text => this.setState({ grade: text })}
                />
              </InputGroup>
              <InputGroup borderType='regular' iconRight>
                <Icon name='ios-checkmark-circle' style={{ color: '#2980b9' }} />
                <Input
                  style={{ flex: 1 }}
                  placeholder='Percent of Grade'
                  value={this.state.percent}
                  keyboardType={'numeric'}
                  onChangeText={text => this.setState({ percent: text })}
                />
              </InputGroup>
              <InputGroup borderType='regular' iconRight>
                <Icon name='ios-checkmark-circle' style={{ color: '#2980b9' }} />
                <Input
                  style={{ flex: 1 }}
                  placeholder='Section Grade'
                  value={this.state.gradeTwo}
                  keyboardType={'numeric'}
                  onChangeText={text => this.setState({ gradeTwo: text })}
                />
              </InputGroup>
              <InputGroup borderType='regular' iconRight>
                <Icon name='ios-checkmark-circle' style={{ color: '#2980b9' }} />
                <Input
                  style={{ flex: 1 }}
                  placeholder='Percent of Grade'
                  value={this.state.percentTwo}
                  keyboardType={'numeric'}
                  onChangeText={text => this.setState({ percentTwo: text })}
                />
              </InputGroup>
              <InputGroup borderType='regular' iconRight>
                <Icon name='ios-checkmark-circle' style={{ color: '#2980b9' }} />
                <Input
                  style={{ flex: 1 }}
                  placeholder='Section Grade'
                  value={this.state.gradeThree}
                  keyboardType={'numeric'}
                  onChangeText={text => this.setState({ gradeThree: text })}
                />
              </InputGroup>
              <InputGroup borderType='regular' iconRight>
                <Icon name='ios-checkmark-circle' style={{ color: '#2980b9' }} />
                <Input
                  style={{ flex: 1 }}
                  placeholder='Percent of Grade'
                  value={this.state.percentThree}
                  keyboardType={'numeric'}
                  onChangeText={text => this.setState({ percentThree: text })}
                />
              </InputGroup>
              <Text>Your grade is : {this.state.answer}</Text>
            </Content>
              <Button
              block style={{ backgroundColor: '#2980b9' }}
              large textStyle={{ fontSize: 18 }}
              onPress={this.onButtonPress.bind(this)}
              >Calculate</Button>
              <Button
              block style={{ backgroundColor: '#2980b9' }}
              large textStyle={{ fontSize: 18 }}
              onPress={this.onButtonPress.bind(this)}
              >Reset Form</Button>
          </View>
      </Container>
    );
  }
}

Exponent.registerRootComponent(App);
