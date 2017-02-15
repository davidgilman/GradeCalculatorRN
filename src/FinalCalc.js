import React from 'react';
import {
  Container, Content, Header, Button, View,
   Text, InputGroup, Input, Card, CardItem
} from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

class FinalCalc extends React.Component {
  state = { currentGrade: '',
   desiredGrade: '',
   examWeight: '',
   answer: '' };

  onButtonPress() {
    const check = function (value) {
      if (value === '') {
        return 0;
      } else {
        return parseFloat(value);
      }
    };

    const currentGrade = check(this.state.currentGrade);
    const desiredGrade = check(this.state.desiredGrade);
    const examWeight = check(this.state.examWeight);

    const answerBefore = ((1 * (desiredGrade / 100)) -
     ((1 - (examWeight / 100)) * (currentGrade / 100))) / (examWeight / 100);

    const answer = answerBefore * 100;

    this.setState({ answer }); //answer: answer (used shorthand)
  }

  onClearPress() {
    this.setState({ currentGrade: '' });
    this.setState({ desiredGrade: '' });
    this.setState({ examWeight: '' });
    this.setState({ answer: '' });
  }


  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#34495e' }}>
              <Text style={{ color: 'white', fontSize: 18 }}>Final Exam</Text>
          </Header>

          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Content>
              <Card>
              <Grid>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='Current Grade %'
                        value={this.state.currentGrade}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ currentGrade: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='Desired Grade %'
                        value={this.state.desiredGrade}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ desiredGrade: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='Exam Weight %'
                        value={this.state.examWeight}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ examWeight: text })}
                      />
                    </InputGroup>
                  </Row>
              </Grid>
                <CardItem style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 16 }}>
                  I will need a: {this.state.answer}%</Text>
                </CardItem>
              <CardItem>
              <Button
              block style={{ backgroundColor: '#2980b9', height: 45 }}
              large textStyle={{ fontSize: 18 }}
              onPress={this.onButtonPress.bind(this)}
              >Calculate</Button></CardItem>
              <CardItem>
              <Button
              block style={{ backgroundColor: '#2980b9', height: 45 }}
              large textStyle={{ fontSize: 18 }}
              onPress={this.onClearPress.bind(this)}
              >Reset Form</Button></CardItem>
              </Card>
            </Content>
          </View>
      </Container>
    );
  }
}

export default FinalCalc;
