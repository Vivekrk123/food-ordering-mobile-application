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
  const src25 = { uri:'https://rzp.io/i/qcflDiWI'}
  const src60 = { uri:'https://rzp.io/i/x3WPcx3mD'}
  const src80 = { uri:'https://rzp.io/i/xXAdyxPOV'}
  const src110 = { uri:'https://rzp.io/i/F20YrhKj'}
  return (
    <ScrollView>
      <Searchbar/>
      <Text style={styles.heading}>Bakery</Text>
      <View style={styles.cards}>
      <Item
        name="Egg Puff"
        image={require("../assets/eggpuff.png")}
        price='20'
        link = {src20}
      />
       <Item
        name="Chicken Puff"
        image={require("../assets/chickenpuff.png")}
        price='30'
        link = {src30}
      />
            
      </View>
      <View style={styles.cards}>
        <Item
        name="Veg Puff"
        image={require("../assets/vegpuff.png")}
        price='20'
        link = {src20}
      />
      <Item
        name="Veg Maggi"
        image={require("../assets/vegmaggi.png")}
        price='50'
        link = {src50}
      />
       </View>
      <View style={styles.cards}>
            <Item
        name="Veg Sandwich"
        image={require("../assets/vegsandwich.png")}
        price='50'
        link = {src50}
      />
            <Item
        name="Chicken sandwich"
        image={require("../assets/chickensandwich.png")}
        price='70'
        link = {src70}
      />
      </View>
     
      <View style={styles.cards}>
      <Item
        name="Black Forest"
        image={require("../assets/blackforest.png")}
        price='30'
        link = {src30}
      />
            <Item
        name="Cup Cake"
        image={require("../assets/cupcake.png")}
        price='20'
        link = {src20}
      />
            
      </View>
      <View style={styles.cards}>
      <Item
        name="Choco Pastery"
        image={require("../assets/chacopastery.png")}
        price='30'
        link = {src30}
      />
      </View>
    </ScrollView>
  )
  }

const styles = StyleSheet.create({
  heading:{
    width: 200,
    height: 27,
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontSize: 23,
    lineHeight: 27,
    color: '#333333',
    marginHorizontal:130,
    marginTop:10,
    marginBottom:60,
  },
  cards:{
    flexDirection:'row',
    marginLeft:15,
    marginRight:20,
    marginTop:14,
    marginBottom:14,
    justifyContent:'space-evenly',
  }
});
export default Foodtruck