import { StyleSheet, Text, View ,ImageBackground , Image , TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Started() {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.hello}>Hello MGITIANS</Text>
      </View>
      <ImageBackground
         style={{flex:1}}>
          <View style={styles.secondhalf}>
            <View style={styles.textbox}>
              <Text style={styles.textbox}>Are you Hungry?</Text>
            </View>
            <View style={styles.started}>
              <View style={styles.circle}>
                 <Image source={require('../assets/Vector.png')}>
                 </Image>
              </View>
              <TouchableOpacity
              onPress={()=>navigation.navigate("Login")}
              >
                <Text style={styles.startedText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
      </ImageBackground>
      
      
      </View>

      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'#EA2027',
  },
  secondhalf: {
    flex:1,
    alignItems:'center',
    backgroundColor:'#EA2027',
    
  },
  textbox: {
    fontFamily:'poppins', 
    fontSize:35,
    marginTop: 150,
    textAlign: 'center',
    color: '#FFFFFF',
    lineHeight:48,
  },
  started:{
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    width: 280,
    height: 60,
    marginHorizontal: 150,
    justifyContent:'center',
    paddingLeft:7,
    paddingTop:5,
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:50,
  },
  circle:{
    width: 50,
    height: 50,
    backgroundColor: '#EA2027',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
  },
  startedText:{
    fontFamily: 'poppins',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 27,
    textAlign:'center',
    marginBottom:10,
    marginTop:13,
    marginLeft:50,
    marginRight:90,
    color:'#333333',
  },
  hello:{
    fontFamily:'poppins', 
    fontSize:40,
    fontSize: 40,
    marginTop: 80,
    textAlign: 'center',
    color: '#FFFFFF',
    lineHeight:48,
  }
});
