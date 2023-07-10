import { View, Text , StyleSheet , ScrollView, FlatList} from 'react-native'
import React from 'react'
import Searchbar from './components/Searchbar';
import Item from './components/Item';

const Canteen = () => {
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
      
      <Text style={styles.heading}>Canteen</Text>
      <View style={styles.cards}>
      <Item
        id='1'
        name="Idly"
        image={require("../assets/idly.png")}
        price='25'
        link = {src25}
      />
      <Item
        id='2'
        name="Dosa"
        image={require("../assets/dosa.png")}
        price='30'
        link = {src30}
      />
      
      </View>
      <View style={styles.cards}>
        <Item
        name="Puri"
        image={require("../assets/puri.png")}
        price='30'
        link = {src30}
      />
      <Item
        id='1'
        name="TEA"
        image={require("../assets/tea.png")}
        price='10'
        link = {src10}
      />
      </View>
      <View style={styles.cards}>
      <Item
        name="COFFEE"
        image={require("../assets/coffee.png")}
        price='15'
        link = {src15}
      />
      <Item
        name="Lemon Tea"
        image={require("../assets/lemontea.png")}
        price='15'
        link = {src15}
      />
      </View>
      <View style={styles.cards}>
      <Item
        name="Chole Bhature"
        image={require("../assets/Cholebature.png")}
        price='50'
        link = {src50}
      />
      <Item
        name="Veg Fried Rice"
        image={require("../assets/vegfriedrice.png")}
        price='50'
        link = {src50}
      />
      
      </View>
      <View style={styles.cards}>
        <Item
        name=" Veg biryani"
        image={require("../assets/biryani.png")}
        price='70'
        link = {src70}
      />
      <Item
        name="Gulab Jamun"
        image={require("../assets/gulabjam.png")}
        price='20'
        link = {src20}
      />
      </View>
      <View style={styles.cards}>
      <Item
        name="Double-ka-Meetha"
        image={require("../assets/doublekameetha.png")}
        price='20'
        link = {src20}
      />
      <Item
        name="Kaal Jamun"
        image={require("../assets/kaaljamun.png")}
        price='20'
        link = {src20}
      />
      </View>
      <View style={styles.cards}>
      <Item
        name="Samosa"
        image={require("../assets/samosa.png")}
        price='20'
        link = {src20}
      />
      <Item
        name="Punugulu"
        image={require("../assets/punugulu.png")}
        price='30'
        link = {src30}
      />
      </View>
      <View style={styles.cards}>     
       <Item
        name="Onion Pakodi"
        image={require("../assets/onionpakodi.png")}
        price='30'
        link = {src30}
      />
      </View>
    </ScrollView>
  )
  }

const styles = StyleSheet.create({
  heading:{
    width: 110,
    height: 27,
    fontFamily: 'poppins',
    fontWeight: 800,
    fontSize: 23,
    lineHeight: 27,
    color: '#333333',
    marginHorizontal:135,
    marginVertical:10,
  },
  subHead:{
    width: 200,
    height: 27,
    fontFamily: 'poppins',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 27,
    color: '#333333',
    marginLeft:20,
  },
  cards:{
    flexDirection:'row',
    marginLeft:15,
    marginRight:20,
    marginTop:14,
    marginBottom:14,
  }
});
export default Canteen;