import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';


const StudentLogin = () => {
  const [rollno, setrollno] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [mobileno, setmobileno] = useState('');
  const [selectedOption, setSelectedOption] = useState('student');
  const register = async ()  => {
    const response = await fetch('https://easybite-92534-default-rtdb.firebaseio.com/person.json',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:
        JSON.stringify({
          name,
          rollno,
          mobileno,
          password,
          selectedOption
        })
      
    })
    const resData = await response.json()
    console.log(resData)
    navigation.navigate('Home')
}
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
      <Text style={styles.heading}>SIGNUP</Text>
      <View style={{ flexDirection :'row',marginBottom:5}}>
      <Text style={{ fontFamily :'poppins' , color:'#ffff' , marginTop:8}}>Select your role:</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <RadioButton
          value="faculty"
          status={selectedOption === 'faculty' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedOption('faculty')}
       />
       <Text style={{ fontFamily :'poppins' , color:'#ffff' ,fontWeight :'700'}}>Faculty</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="student"
          status={selectedOption === 'student' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedOption('student')}
        />
        <Text style={{ fontFamily :'poppins' , color:'#ffff' ,}}>Student</Text>
      </View>
    </View>
    <View style={styles.space}>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setname}
      />
      </View>
      <View style={styles.space}>
      <TextInput
        placeholder="Roll no"
        style={styles.input}
        value={rollno}
        onChangeText={setrollno}
      />
      </View>
      <View style={styles.space}>
      <TextInput
        placeholder="Mobile no"
        style={styles.input}
        value={mobileno}
        onChangeText={setmobileno}
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
        onPress={register}
      >
      <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={()=>navigation.navigate("Login")}
      >
      <Text style={styles.registerText}>Already have an account, login?</Text>
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
    marginBottom:30,
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