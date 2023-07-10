import { View, Text ,StyleSheet  ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import RazorpayCheckout from 'react-native-razorpay';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

const Item = (props) => {
const navigation=useNavigation();
  return (
    <View style={styles.card}>
        <Image source={props.image} style={styles.image} />
        <View style={styles.info}>
        <Text style={styles.name}>{props.name}</Text>
          <View>
            <Text style={styles.price}>Price: {props.price}</Text>
          <View style={styles.btn}>
            <TouchableOpacity  onPress={()=>navigation.navigate("Razorpay" , {params:{source:props.link}})}><Text  style={styles.btntext}>Order Now!</Text></TouchableOpacity>  
          </View> 
          </View> 
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        borderRadius: 16,
        elevation: 5,
        shadowColor: '#000',
        margin:10,
        width: 150,
        height: 205,
        shadowOffset: {
        width: 60,
        height: 60,
        flexDirection:'row',
        },
        shadowOpacity:0.02,
        shadowRadius:8,
          
    },
    image:{
      width:100,
      height:80,
      borderRadius:13,
      marginLeft:25,
      marginVertical:10,

    },
    info:{
      marginTop:10,
      alignItems:'center',
    },
    btn:{
      
    },
    name:{
      width: 140,
      height: 20,
      fontFamily: 'poppins',
      fontWeight: 800,
      fontSize: 15,
      lineHeight: 15,
      color: '#333333',
      marginLeft:30,
    },
    price:{
      fontFamily: 'poppins',
      fontWeight: 800,
      fontSize: 15,
      lineHeight: 27,
      color: '#333333',
    },
    btn:{
      width: 100,
      height: 30,
      backgroundColor: '#EA2027',
      borderRadius: 14,
      marginLeft:10,
      marginTop:10,
    },
    btntext:{
      fontFamily: 'poppins',
      fontWeight: 800,
      fontSize: 15,
      lineHeight: 32,
      color: '#FFFFFF',
      marginLeft:12,
    }
})
export default Item

/*const onPaymentSuccess = (data) => {
    console.log('Payment success', data);
  };
  
  const onPaymentError = (error) => {
    console.log('Payment error', error);
  };
  
  const openRazorpay = () => {
      // initiate the payment process
      var options = {
        description: 'Payment for your order',
        image: 'https://your-company-logo.png',
        currency: 'INR',
        key: 'rzp_test_TGbh8QR5uJXzBq',
        amount: '100',
        name: 'Your Company Name',
        order_id: '12345',
        prefill: {
          email: 'customer@example.com',
          contact: '9999999999'
        },
        theme: { color: '#F37254' }
      };
      RazorpayCheckout.open(options).then((data) => {
        console.log(data);
    }).catch((error) => {
      // handle payment failure
      console.log(error);
    });
  }
*/