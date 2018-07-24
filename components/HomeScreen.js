import React, { Component } from 'react';
import { API_ROOT } from '../common/api-config';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import PropTypes from 'prop-types';

export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome World',
    };
    render() {
        console.log(API_ROOT);
      const { navigate } = this.props.navigation;
      return (
        <Container>
            <Content>
            <List>
                <ListItem itemDivider>
                <Text>A</Text>
                </ListItem>                    
                <ListItem>
                <Text>Aaron Bennet</Text>
                </ListItem>
                <ListItem>
                <Text>Ali Connors</Text>
                </ListItem>
                <ListItem itemDivider>
                <Text>B</Text>
                </ListItem>  
                <ListItem>
                <Text>Bradley Horowitz</Text>
                </ListItem>
                <ListItem>
                <Text>Breno Carlos</Text>
                </ListItem>
                <ListItem>
                <Text>Bruno Giovanni</Text>
                </ListItem>
            </List>
            </Content>
        </Container>
      );
    }
}

HomeScreen.contextTypes = {
    store: PropTypes.object.isRequired
}