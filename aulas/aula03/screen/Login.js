import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={estilos.container}>
      <Text>Login</Text>
      <TextInput placeholder={'E-mail'} keyboardType={'email-address'} />
      <TextInput placeholder={'Senha'} secureTextEntry={true} />
      <Button title="Entrar" />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default Login;