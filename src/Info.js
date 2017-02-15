import React from 'react';
import {
  Container, Header, View,
   Text, Content, Card
} from 'native-base';

class Info extends React.Component {

  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#34495e' }}>
              <Text style={{ color: 'white', fontSize: 18 }}>Weighted Grade</Text>
          </Header>

          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Content>
              <Card>
              <Text>Info</Text>
              </Card>
            </Content>
          </View>
      </Container>
    );
  }
}

export default Info;
