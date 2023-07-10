import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoriesCard = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{props.name}</Text>
      <Image source={props.image} style={styles.image}/> 
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 5,
    margin: 10,
    marginLeft : 10,
    marginRight:20,
    shadowColor: '#000',
    width: 340,
    height: 140,
    shadowOffset: {
    width: 0,
    height: 8,
    },
    flexDirection:'row',
    shadowOpacity:0.02,
    shadowRadius:8,
    justifyContent:'space-between',
  },
  image: {
    width: 90,
    height: 75,
    borderRadius: 13,
    marginRight:20,
    marginTop:30
  },
  name: {
    fontFamily:'poppins',
    fontStyle : 'italic',
    fontWeight: 600,
    fontSize: 30,
    lineHeight: 35,
    color: '#333333',
    textAlign:'left',
    marginTop:45,
    marginLeft:20,
  },
});

export default CategoriesCard;