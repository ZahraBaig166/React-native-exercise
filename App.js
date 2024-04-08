import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomList from './CustomList';

export default function App() {
  const [ListData1, setListData1] = useState([
    { name: 'Burger', imageUri: 'https://cdn-icons-png.flaticon.com/512/198/198416.png' },
    { name: 'Kebab', imageUri: 'https://cdn-icons-png.flaticon.com/512/2619/2619574.png'},
    { name: 'Chicken', imageUri: 'https://cdn-icons-png.freepik.com/512/1617/1617548.png'},
    { name: 'Fries', imageUri: 'https://cdn-icons-png.freepik.com/512/4459/4459356.png' },
  ]);

  const [ListData2, setListData2] = useState([
    { name: 'Monsterra Patty', imageUri: 'https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png', price: '$12.00' },
    { name: 'Hukl Burger', imageUri: 'https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png', price: '$12.00' },
    { name: 'Monsterra Patty', imageUri: 'https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png', price: '$12.00' },
    { name: 'Hukl Burger', imageUri: 'https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png', price: '$12.00' },
  ]);

  const [ListData3, setListData3] = useState([
    { name: 'Vege Burger', imageUri: 'https://icons.veryicon.com/png/o/food--drinks/flat-color-restaurant-icon/hamburger-8.png', price: '$12.00' },
    { name: 'Vege Burger', imageUri: 'https://icons.veryicon.com/png/o/food--drinks/flat-color-restaurant-icon/hamburger-8.png', price: '$10.00' },
    { name: 'Vege Burger', imageUri: 'https://icons.veryicon.com/png/o/food--drinks/flat-color-restaurant-icon/hamburger-8.png', price: '$9.00' },
    { name: 'Vege Burger', imageUri: 'https://icons.veryicon.com/png/o/food--drinks/flat-color-restaurant-icon/hamburger-8.png', price: '$22.00' },
  ]);

  return (
    <View style={styles.container}>
     <Text style={styles.header}>Hello Tajamal Shah,</Text>
     <Text style={styles.subtitle}>Choose your favorite food</Text>
      <CustomList data={ListData1} layoutType="horizontal" />
      <CustomList data={ListData2} layoutType="horizontalStack" />
      <CustomList data={ListData3} layoutType="custom" /> 
    </View>
  );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: 'lightgray',
   padding: 10,
   paddingTop: 20,
 },
 header: {
   fontSize: 18,
   fontWeight: 'bold',
   marginTop: 20,
   marginLeft: 10,
 },
 subtitle: {
   fontSize: 24,
   fontWeight: 'bold',
   marginLeft: 10,
   marginTop: 10,
   color: 'rgb(221, 147, 124)'
 },
}); 