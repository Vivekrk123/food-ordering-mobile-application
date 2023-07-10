import React, { useState } from 'react';
import { View , Text ,Image , TextInput, StyleSheet, Touchable, TouchableOpacity, FlatList } from 'react-native';
import data from './data';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigation=useNavigation();
  

  const handleSearch = (text) => {
    const newData = data.filter((item) => {
      const itemName = item.name.toLowerCase();
      const searchText = text.toLowerCase();
      return itemName.indexOf(searchText) > -1;
    });

    setFilteredData(newData);
    setSearchText(text);
  };

  const renderItem = ({ item }) => <View style={styles.list}><Text>{item.name}</Text></View>;
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.searchBar}>
      <TextInput 
      style={styles.typeBar}
      placeholder="Search your favorite food..."
      value={searchText}
      onChangeText={handleSearch}
      onSubmitEditing={handleSearch}
      returnKeyType="search"
      />
      <TouchableOpacity style={styles.searchlogo}>
      <Image source={require("../../assets/searchlogo.png")}/>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.profilelogo} >
      <Image source={require("../../assets/profile.png")}/>
      </TouchableOpacity>
      
    </View>
    <View>
    <FlatList
    data={filteredData}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderItem}/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: 264,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    paddingHorizontal:10
  },
  typeBar:{

  },
  container:{
    flexDirection:'row',
    marginTop:20,
    marginBottom:25,
  },
  searchlogo:{
    marginTop:12,
  },
  profilelogo:{
    marginTop:10,
    marginLeft:10,
  },
  list:{
    padding:5,
    margin:5,
    borderBottomColor:'black',
    borderBottomWidth:1,
    backgroundColor:'grey',

  }
});

export default SearchBar;