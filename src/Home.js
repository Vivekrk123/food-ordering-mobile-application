import { StyleSheet, Text, View ,Image, TouchableOpacity , ScrollView} from 'react-native';
import React from 'react';
import Searchbar from './components/Searchbar';
import Categories from './components/Categories';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation=useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Searchbar/>
      <View style={styles.red}>  
        <Text style={styles.msg}>Pickup Your Food without delay</Text>
        <View style={styles.msgbelow}>
          <View style={styles.orderbox}>
            <TouchableOpacity>
              <Text style={styles.orderText}>Order now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.food}>
            <Image source={require('../assets/food.png')}>
            </Image>
          </View>
        </View>
      </View>
      <Text style={styles.Categories}>Categories</Text>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate("Canteen")}>
      <Categories
        name="Canteen"
        image={require("../assets/canteen.png")}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Foodtruck")}>
      <Categories
        name="Food truck"
        image={require("../assets/foodtruck.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>navigation.navigate("Bakery")}>
      <Categories
        name="bakery"
        image={require("../assets/bakery.png")}
      />
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F2F2F2",
  },
  red:{
    width: 327,
    height: 175,
    backgroundColor: '#EA2027',
    borderRadius: 24,
    marginHorizontal:16,
  },
  msg:{
    width: 241,
    height: 64,
    fontFamily: 'poppins',
    fontStyle:'italic',
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 32,
    color: '#FFFFFF',
    marginHorizontal:30,
    marginTop:20,
  },
  msgbelow:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  orderbox:{
    padding:4,
    width: 97,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginLeft:10,
    marginTop:30,
  },
  orderText:{
    fontFamily: 'poppins',
    fontWeight: 800,
    fontSize: 16,
    lineHeight: 32,
    color: '#EA2027',
    marginLeft:7,
  },
  food:{
    marginLeft:5,
    marginTop:15,
  },
  Categories:{
    width: 110,
    height: 27,
    fontFamily: 'poppins',
    fontWeight: 700,
    fontSize: 21,
    lineHeight: 27,
    color: '#333333',
    marginTop: 40,
    marginLeft:19,
  }
})
export default Home