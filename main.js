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
        return parseFloat(value);
      }
    };

    const grade = check(this.state.grade);
    const gradeTwo = check(this.state.gradeTwo);
    const gradeThree = check(this.state.gradeThree);
    const percent = check(this.state.percent);
    const percentTwo = check(this.state.percentTwo);
    const percentThree = check(this.state.percentThree);

    const totalPercent = percent + percentTwo + percentThree;
    const tPercent = 100 / totalPercent;

    const answer = (((grade * (percent / 100)) + (gradeTwo * (percentTwo / 100))
    + (gradeThree * (percentThree / 100))) * tPercent);

    this.setState({ answer }); //answer: answer (used shorthand)
  }

  onClearPress() {
    this.setState({ grade: '' });
    this.setState({ percent: '' });
    this.setState({ gradeTwo: '' });
    this.setState({ percentTwo: '' });
    this.setState({ gradeThree: '' });
    this.setState({ percentThree: '' });
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
              onPress={this.onClearPress.bind(this)}
              >Reset Form</Button>
          </View>
      </Container>
    );
  }
}

Exponent.registerRootComponent(App);
