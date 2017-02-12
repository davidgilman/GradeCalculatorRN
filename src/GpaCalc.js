import React from 'react';
import {
  Container, Header, Button, View,
   Text, InputGroup, Input, Content, Card, CardItem, Picker
} from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';


class GpaCalc extends React.Component {

  state = { grade: 'key0',
   percent: '',
   answer: '',
   gradeTwo: '',
   percentTwo: '',
   gradeThree: '',
   percentThree: '',
   gradeFour: '',
   percentFour: '',
   gradeFive: '',
   percentFive: '',
   gradeSix: '',
   percentSix: '',
   gradeSeven: '',
   percentSeven: '',
   gradeEight: '', };

  onValueChange(value: string) {
     this.setState({
       grade: value
     });
    }

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
    const gradeFour = check(this.state.gradeFour);
    const gradeFive = check(this.state.gradeFive);
    const gradeSix = check(this.state.gradeSix);
    const gradeSeven = check(this.state.gradeSeven);
    const gradeEight = check(this.state.gradeEight);

    const percent = check(this.state.percent);
    const percentTwo = check(this.state.percentTwo);
    const percentThree = check(this.state.percentThree);
    const percentFour = check(this.state.percentFour);
    const percentFive = check(this.state.percentFive);
    const percentSix = check(this.state.percentSix);
    const percentSeven = check(this.state.percentSeven);
    const percentEight = check(this.state.percentEight);

    const totalPercent = percent + percentTwo + percentThree + percentFour
    + percentFive + percentSix + percentSeven + percentEight;
    const tPercent = 100 / totalPercent;

    const answer = (((grade * (percent / 100)) + (gradeTwo * (percentTwo / 100))
    + (gradeThree * (percentThree / 100)) + (gradeFour * (percentFour / 100))
    + (gradeFive * (percentFive / 100)) + (gradeSix * (percentSix / 100))
    + (gradeSeven * (percentSeven / 100)) + (gradeEight * (percentEight / 100)))
    * tPercent);

    this.setState({ answer }); //answer: answer (used shorthand)
  }

  onClearPress() {
    this.setState({ grade: '' });
    this.setState({ percent: '' });
    this.setState({ gradeTwo: '' });
    this.setState({ percentTwo: '' });
    this.setState({ gradeThree: '' });
    this.setState({ percentThree: '' });
    this.setState({ gradeFour: '' });
    this.setState({ percentFour: '' });
    this.setState({ gradeFive: '' });
    this.setState({ percentFive: '' });
    this.setState({ gradeSix: '' });
    this.setState({ percentSix: '' });
    this.setState({ gradeSeven: '' });
    this.setState({ percentSeven: '' });
    this.setState({ gradeEight: '' });
    this.setState({ percentEight: '' });
    this.setState({ answer: '' });
  }


  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#34495e' }}>
              <Text style={{ color: 'white', fontSize: 18 }}>GPA</Text>
          </Header>

          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Content>
              <Card>
              <Grid>
                <CardItem>
                  <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16 }}>Class Grade</Text>
                  </Row>
                </CardItem>
                  <Row>
                    <Picker
                        style={{ width: 100 }}
                        mode="dropdown"
                        selectedValue={this.state.grade}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Picker.Item label="A++" value="key0" />
                        <Picker.Item label="A+" value="key1" />
                        <Picker.Item label="A" value="key2" />
                        <Picker.Item label="A-" value="key3" />
                        <Picker.Item label="B+" value="key4" />
                        <Picker.Item label="B" value="key5" />
                        <Picker.Item label="B-" value="key6" />
                        <Picker.Item label="C+" value="key7" />
                        <Picker.Item label="C" value="key8" />
                        <Picker.Item label="C-" value="key9" />
                        <Picker.Item label="D+" value="key10" />
                        <Picker.Item label="D" value="key11" />
                        <Picker.Item label="D-" value="key12" />
                        <Picker.Item label="F" value="key13" />
                   </Picker>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.gradeTwo}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ gradeTwo: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.gradeThree}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ gradeThree: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.gradeFour}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ gradeFour: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.gradeFive}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ gradeFive: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.gradeSix}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ gradeSix: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.gradeSeven}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ gradeSeven: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.gradeEight}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ gradeEight: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.percent}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ percent: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.percentTwo}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ percentTwo: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.percentThree}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ percentThree: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.percentFour}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ percentFour: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.percentFive}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ percentFive: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.percentSix}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ percentSix: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.percentSeven}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ percentSeven: text })}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup borderType='regular' style={{ flex: 1 }} >
                      <Input
                        style={{ flex: 1 }}
                        placeholder='-'
                        value={this.state.percentEight}
                        keyboardType={'numeric'}
                        onChangeText={text => this.setState({ percentEight: text })}
                      />
                    </InputGroup>
                  </Row>
              </Grid>
                <CardItem style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 16 }}>
                  My GPA is: {this.state.answer}</Text>
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

export default GpaCalc;
