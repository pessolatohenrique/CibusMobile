import React, { Component } from 'react';
import { Item, Input, Text } from 'native-base';
import { TextInput, StyleSheet } from 'react-native';

export const renderInput = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => {
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return( 
      <Item regular error= {hasError}>
        <Input {...input} style={styles.inputStyle} 
        
        placeholder={placeholder}/>
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
}

export const renderPasswordInput = ({ input, label, type, placeholder ,meta: { touched, error, warning } }) => {
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return( 
      <Item regular error= {hasError}>
        <Input {...input} style={styles.inputStyle} 
        secureTextEntry={true} 
        autoCapitalize="none"
        placeholder={placeholder}
        />
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: 'white'
    }
});