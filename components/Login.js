import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { StyleSheet, Dimensions, View, Image, ToastAndroid } from 'react-native';
import { Container, Content, Form, Item, Button, Text, Toast } from 'native-base';
import { renderInput, renderPasswordInput } from '../helpers/RenderHelper';
import LoginLogic from '../logicals/LoginLogic';

class Login extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        // console.log(this.props.navigation.dispatch());
    }

    submit(values) {
        LoginLogic.authorize(this.props, values);        
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
    
        return (
            <Container>
                <Content>
                    
                    <Form>
                        <View style={styles.container}> 
                            <Image
                                style={styles.miniature}
                                source={require('../images/logo_blue_mini.png')}
                            />
                            <View style={styles.login}>
                                <Field 
                                    name="username" 
                                    id="username"
                                    placeholder='Login' 
                                    style={styles.inputLogin}
                                    component={renderInput} 
                                />
                            
                                <Field name="password" 
                                    placeholder='Senha' 
                                    style={styles.inputLogin}
                                    component={renderPasswordInput} 
                                    autoCapitalize="false"
                                    onSubmitEditing={ () => handleSubmit(this.submit) }
                                />
                                
                                <Button block 
                                    onPress={handleSubmit(this.submit)}
                                    style={styles.btnLogin}
                                >
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
        height: Dimensions.get('window').height - 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4db6ac'
    },
    login: {
        width: Dimensions.get('window').width - 30
    },
    btnLogin: {
      marginTop: 20,
    },
    miniature: {
        marginBottom: 30,
        marginTop: 20
    }
});

let LoginForm = reduxForm({
    form: 'login'
})(Login)

LoginForm = connect(
    state => ({
        login: state.login
    }),
    {}
)(LoginForm)

export default LoginForm;