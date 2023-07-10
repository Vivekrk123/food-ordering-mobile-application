import { View, Text , StyleSheet , ScrollView} from 'react-native'
import React from 'react'
import Searchbar from './components/Searchbar';
import Item from './components/Item';

const Foodtruck = () => {
  const src30 = { uri:'https://rzp.io/i/Y3gEkcaS'}
  const src50 = { uri:'https://rzp.io/i/t36oxng'}
  const src70 = { uri:'https://rzp.io/i/P3r4AdCuzx'}
  const src10 = { uri:'https://rzp.io/i/4oUDIi4'}
  const src15 = { uri:'https://rzp.io/i/4zUupBpWK'}
  const src20 = { uri:'https://rzp.io/i/iVnFMIU'}
  const src25 = { uri:'https://rzp.io/i/Tbq6sYoB'}
  const src60 = { uri:'https://rzp.io/i/x3WPcx3mD'}
  const src80 = { uri:'https://rzp.io/i/xXAdyxPOV'}
  const src110 = { uri:'https://rzp.io/i/F20YrhKj'}
  return (
    <ScrollView>
      <Searchbar/>
      
      <Text style={styles.heading}>Food Truck</Text>
      <View style={styles.cards}>
      <Item
        name="Veg Noodeels"
        image={require("../assets/vegnoodles.png")}
        price='60'
        link = {src60}
      />
       <Item
        name="Veg Fried Rice"
        image={require("../assets/vegfriedrice.png")}
        price='60'
        link = {src60}
      />
            <Item
        name="Veg Manchuria"
        image={require("../assets/vegmanchuria.png")}
        price='60'
        link = {src60}
      />
      </View>
      <View style={styles.cards}>
      <Item
        name="Chicken Noodeels"
        image={require("../assets/chickennoodles.png")}
        price='80'
        link = {src80}
      />
      <Item
        name="Chicken Fried Rice"
        image={require("../assets/chickenfriedrice.png")}
        price='80'
        link = {src80}
      />
            <Item
        name="Chicken Manchuria"
        image={require("../assets/chickenmanchuria.png")}
        price='110'
        link = {src110}
      />
      </View>
      <View style={styles.cards}>
      <Item
        name="EGG Fried Rice"
        image={require("../assets/eggfriedrice.png")}
        price='70'
        link = {src70}
      />
            <Item
        name="Chicken 65"
        image={require("../assets/chicken65.png")}
        price='110'
        link = {src110}
      />
            <Item
        name="Egg Noodeels"
        image={require("../assets/eggnoodles.png")}
        price='70'
        link = {src70}
      />
      </View>
    </ScrollView>
  )
  }

const styles = StyleSheet.create({
  heading:{
    width: 200,
    height: 27,
    fontFamily: 'poppins',
    fontWeight: 800,
    fontSize: 23,
    lineHeight: 27,
    color: '#333333',
    marginHorizontal:120,
    marginTop:10,
    marginBottom:60,
  },
  cards:{
    flexDirection:'row',
    marginLeft:15,
    marginRight:20,
    marginTop:14,
    marginBottom:14,
  }
});
export default Foodtruck;