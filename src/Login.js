import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const StudentLogin = () => {
  const [rollno, setrollno] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (rollno === '20261A05A6' && password === '12345') {
      alert('Login successful!');
    } else {
      alert('Invalid email or password');
    }
  }
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LOGIN</Text>
      <View style={styles.space}>
      <TextInput
        placeholder="Mobile no"
        style={styles.input}
        value={rollno}
        onChangeText={setrollno}
      />
      </View>
      <View style={styles.space}>
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      </View>
      <View style={styles.loginContainer}>
      <TouchableOpacity
        onPress={()=>navigation.navigate("Home")}
      >
      <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={()=>navigation.navigate("Register")}
      >
      <Text style={styles.registerText}>Don't have an account, signup?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA2027',
  },
  input: {
    marginVertical: 14,
    marginHorizontal :20,
    borderRadius: 5,
    width: 150,
    height: 30,
    fontFamily: 'poppins',
    fontSize: 20,
    lineHeight: 36,
    alignItems: 'center',
    color: '#384A66',
    marginBottom :0,
  },
  space:{
    margin:10,
    width: 311,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
  },
  loginContainer:{
    width: 96,
    height: 42,     
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    marginTop:10,
    marginHorizontal:50,
  
  },
  loginText:{
    width: 80,
    height: 27,
    fontFamily: 'poppins',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    color: '#384A66',
    marginHorizontal:10,
    marginTop:5,
  },
  below:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  heading:{
    fontFamily: 'poppins',
    fontWeight: 800,
    fontSize: 35,
    lineHeight: 40,
    color: '#FFFFFF',
    marginHorizontal:30,
    marginBottom:60,
  },
  registerText:{
  color : '#FFFFFF',
  marginTop:90,
  fontFamily:'poppins',
  fontSize:14,
  width:300,
  marginLeft:60,
  }
});

export default StudentLogin;