import Exponent from 'exponent';
import React from 'react';
import {
  Container, Header, Button, View,
   Text, InputGroup, Input, Content
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class App extends React.Component {
  state = { grade: '', percent: '', answer: '' };

  onButtonPress() {
    const grade = this.state.grade;
    const percent = this.state.percent;
    this.setState({
      answer: grade * percent
    });
  }

  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#34495e' }}>
              <Text style={{ color: 'white', fontSize: 18 }}>Grade Calculator</Text>
          </Header>

          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Content>
              <InputGroup borderType='regular'>
                <Input
                  style={{ flex: 1 }}
                  placeholder='Percent of Grade'
                  value={this.state.grade}
                  keyboardType={'numeric'}
                  onChangeText={text => this.setState({ grade: text })}
                />
              </InputGroup>
              <InputGroup borderType='regular'>
                <Input
                  style={{ flex: 1 }}
                  placeholder='Section Grade'
                  value={this.state.percent}
                  onChangeText={text => this.setState({ percent: text })}
                />
              </InputGroup>
              <Text>{this.state.answer}</Text>
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
