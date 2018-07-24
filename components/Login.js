import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        
        return (
            <Container>
                <Content>
                    <Form>
                        <View style={styles.container}> 
                            <View style={styles.login}>
                            <Item stackedLabel>
                                <Label>Usuário</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Senha</Label>
                                <Input secureTextEntry={true}/>
                            </Item>
                            <Button block style={styles.btnLogin}>
                                <Text>Login</Text>
                            </Button>
                            </View>
                        </View>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        flexDirection: 'column',
        height: Dimensions.get('window').height - 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    login: {
        width: Dimensions.get('window').width - 20,
    },
    btnLogin: {
      marginTop: 20,
    }
});

/**
 *       <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
 */