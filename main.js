import Exponent from 'exponent';
import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base';

import TabOne from './src/WeightedCalc';
import TabTwo from './src/OtherCalc';

class App extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Tabs>
                        <TabOne tabLabel='One' />
                        <TabTwo tabLabel='Two' />
                    </Tabs>
                </Content>
            </Container>
        );
    }
}

Exponent.registerRootComponent(App);
