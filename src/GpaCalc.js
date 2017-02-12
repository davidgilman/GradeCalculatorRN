import React from 'react';
import {
  Container, Header, Button, View,
   Text, Content, Card, CardItem, Picker
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class GpaCalc extends React.Component {

  state = { grade: 'key0',
   unit: 'key0',
   answer: '',
   gradeTwo: 'key0',
   unitTwo: 'key0',
   gradeThree: 'key0',
   unitThree: 'key0',
   gradeFour: 'key0',
   unitFour: 'key0',
   gradeFive: 'key0',
   unitFive: 'key0',
   gradeSix: 'key0',
   unitSix: 'key0',
   gradeSeven: 'key0',
   unitSeven: 'key0',
   gradeEight: 'key0',
   unitEight: 'key0', };

  onGradeChange(value: string) {
     this.setState({
       grade: value
     });
    }

  onUnitChange(value: string) {
     this.setState({
       unit: value
     });
    }

  onGradeTwoChange(value: string) {
     this.setState({
       gradeTwo: value
     });
    }

  onUnitTwoChange(value: string) {
     this.setState({
       unitTwo: value
     });
    }

  onGradeThreeChange(value: string) {
     this.setState({
       gradeThree: value
     });
    }

  onUnitThreeChange(value: string) {
     this.setState({
       unitThree: value
     });
    }

  onGradeFourChange(value: string) {
     this.setState({
       gradeFour: value
     });
    }

  onUnitFourChange(value: string) {
     this.setState({
       unitFour: value
     });
    }

  onGradeFiveChange(value: string) {
     this.setState({
       gradeFive: value
     });
    }

  onUnitFiveChange(value: string) {
     this.setState({
       unitFive: value
     });
    }

  onGradeSixChange(value: string) {
     this.setState({
       gradeSix: value
     });
    }

  onUnitSixChange(value: string) {
     this.setState({
       unitSix: value
     });
    }

  onGradeSevenChange(value: string) {
     this.setState({
       gradeSeven: value
     });
    }

  onUnitSevenChange(value: string) {
     this.setState({
       unitSeven: value
     });
    }

  onGradeEightChange(value: string) {
     this.setState({
       gradeEight: value
     });
    }

  onUnitEightChange(value: string) {
     this.setState({
       unitEight: value
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

    const unit = check(this.state.unit);
    const unitTwo = check(this.state.unitTwo);
    const unitThree = check(this.state.unitThree);
    const unitFour = check(this.state.unitFour);
    const unitFive = check(this.state.unitFive);
    const unitSix = check(this.state.unitSix);
    const unitSeven = check(this.state.unitSeven);
    const unitEight = check(this.state.unitEight);

    const totalunit = unit + unitTwo + unitThree + unitFour
    + unitFive + unitSix + unitSeven + unitEight;
    const tunit = 100 / totalunit;

    const answer = (((grade * (unit / 100)) + (gradeTwo * (unitTwo / 100))
    + (gradeThree * (unitThree / 100)) + (gradeFour * (unitFour / 100))
    + (gradeFive * (unitFive / 100)) + (gradeSix * (unitSix / 100))
    + (gradeSeven * (unitSeven / 100)) + (gradeEight * (unitEight / 100)))
    * tunit);

    this.setState({ answer }); //answer: answer (used shorthand)
  }

  onClearPress() {
    this.setState({ grade: '' });
    this.setState({ unit: '' });
    this.setState({ gradeTwo: '' });
    this.setState({ unitTwo: '' });
    this.setState({ gradeThree: '' });
    this.setState({ unitThree: '' });
    this.setState({ gradeFour: '' });
    this.setState({ unitFour: '' });
    this.setState({ gradeFive: '' });
    this.setState({ unitFive: '' });
    this.setState({ gradeSix: '' });
    this.setState({ unitSix: '' });
    this.setState({ gradeSeven: '' });
    this.setState({ unitSeven: '' });
    this.setState({ gradeEight: '' });
    this.setState({ unitEight: '' });
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
                <Col>
                <CardItem>
                  <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16 }}>Class Grade</Text>
                  </Row>
                </CardItem>
                  <Row>
                    <Picker
                        iosHeader="Select Grade"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.grade}
                        onValueChange={this.onGradeChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
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
                    <Picker
                        iosHeader="Select Grade"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.gradeTwo}
                        onValueChange={this.onGradeTwoChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
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
                    <Picker
                        iosHeader="Select Grade"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.gradeThree}
                        onValueChange={this.onGradeThreeChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
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
                    <Picker
                        iosHeader="Select Grade"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.gradeFour}
                        onValueChange={this.onGradeFourChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
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
                    <Picker
                        iosHeader="Select Grade"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.gradeFive}
                        onValueChange={this.onGradeFiveChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
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
                    <Picker
                        iosHeader="Select Grade"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.gradeSix}
                        onValueChange={this.onGradeSixChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
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
                    <Picker
                        iosHeader="Select Grade"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.gradeSeven}
                        onValueChange={this.onGradeSevenChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
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
                    <Picker
                        iosHeader="Select Grade"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.gradeEight}
                        onValueChange={this.onGradeEightChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
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
                  </Col>
                  <Col>
                  <CardItem>
                    <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 16 }}>Credits/Units</Text>
                    </Row>
                  </CardItem>
                  <Row>
                    <Picker
                        iosHeader="Select Credits/Units"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.unit}
                        onValueChange={this.onUnitChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                        <Picker.Item label="5" value="key5" />
                        <Picker.Item label="6" value="key6" />
                   </Picker>
                  </Row>
                  <Row>
                    <Picker
                        iosHeader="Select Credits/Units"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.unitTwo}
                        onValueChange={this.onUnitTwoChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                        <Picker.Item label="5" value="key5" />
                        <Picker.Item label="6" value="key6" />
                   </Picker>
                  </Row>
                  <Row>
                    <Picker
                        iosHeader="Select Credits/Units"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.unitThree}
                        onValueChange={this.onUnitThreeChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                        <Picker.Item label="5" value="key5" />
                        <Picker.Item label="6" value="key6" />
                   </Picker>
                  </Row>
                  <Row>
                    <Picker
                        iosHeader="Select Credits/Units"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.unitFour}
                        onValueChange={this.onUnitFourChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                        <Picker.Item label="5" value="key5" />
                        <Picker.Item label="6" value="key6" />
                   </Picker>
                  </Row>
                  <Row>
                    <Picker
                        iosHeader="Select Credits/Units"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.unitFive}
                        onValueChange={this.onUnitFiveChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                        <Picker.Item label="5" value="key5" />
                        <Picker.Item label="6" value="key6" />
                   </Picker>
                  </Row>
                  <Row>
                    <Picker
                        iosHeader="Select Credits/Units"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.unitSix}
                        onValueChange={this.onUnitSixChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                        <Picker.Item label="5" value="key5" />
                        <Picker.Item label="6" value="key6" />
                   </Picker>
                  </Row>
                  <Row>
                    <Picker
                        iosHeader="Select Credits/Units"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.unitSeven}
                        onValueChange={this.onUnitSevenChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                        <Picker.Item label="5" value="key5" />
                        <Picker.Item label="6" value="key6" />
                   </Picker>
                  </Row>
                  <Row>
                    <Picker
                        iosHeader="Select Credits/Units"
                        style={{ width: 100, flex: 1 }}
                        mode="dropdown"
                        selectedValue={this.state.unitEight}
                        onValueChange={this.onUnitEightChange.bind(this)}>
                        <Picker.Item label="..." value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                        <Picker.Item label="5" value="key5" />
                        <Picker.Item label="6" value="key6" />
                   </Picker>
                  </Row>
                  </Col>
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
