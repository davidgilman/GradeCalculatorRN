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
    const grade = this.state.grade;
    const gradeTwo = this.state.gradeTwo;
    const gradeThree = this.state.gradeThree;
    const percent = this.state.percent / 100;
    const percentTwo = this.state.percentTwo / 100;
    const percentThree = this.state.percentThree / 100;

    const totalPercent = parseInt(this.state.percent)
    + parseInt(this.state.percentTwo)
    + parseInt(this.state.percentThree);
    console.log(totalPercent);
    const tPercent = 100 / totalPercent;

    const answer = (((grade * percent) + (gradeTwo * percentTwo)
    + (gradeThree * percentThree)) * tPercent);

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
          </View>
      </Container>
    );
  }
}

Exponent.registerRootComponent(App);
