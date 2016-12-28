import Exponent from 'exponent';
import React from 'react';
import {
  Container, Header, Button, View,
   Text, InputGroup, Input
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class App extends React.Component {
  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#34495e' }}>
              <Text style={{ color: 'white', fontSize: 18 }}>Grade Calculator</Text>
          </Header>

          <View style={{ flexDirection: 'column', flex: 1 }}>
              <Grid>
                <Row size={4}>
                  <Col>
                    <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 16 }}>Category Grade</Text>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                  </Col>
                  <Col>
                  <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16 }}>Percent of Grade</Text>
                  </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup borderType='regular' style={{ flex: 1 }} >
                        <Input placeholder='%' />
                      </InputGroup>
                    </Row>
                  </Col>
                </Row>
                <Row size={1}>
                  <View />
                </Row>
              </Grid>
              <Button
              block style={{ backgroundColor: '#2980b9' }}
              large textStyle={{ fontSize: 18 }}
              >Calculate</Button>
          </View>
      </Container>
    );
  }
}

Exponent.registerRootComponent(App);
