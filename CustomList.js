  // CustomList.js
  import React from 'react';
  import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
  
  export default function CustomList({ data, layoutType }) {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, layoutType === 'horizontalStack' ? styles.horizontalStack : null]}>
            <Image source={{ uri: item.imageUri }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
        horizontal={layoutType === 'horizontal' || layoutType === 'horizontalStack'}
        style={[styles.listContainer, layoutType === 'halfHeight' ? styles.halfHeight : null]}
      />
    );
  }
  
  const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'white',
      margin: 10,
      borderRadius: 20,
    },
    horizontalStack: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    image: {
      width: 50, 
      height: 50, 
      marginRight: 10,
      borderRadius: 10,
    },
    textContainer: {
      flex: 1,
    },
    name: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 12,
      color: 'gray',
    },
    listContainer: {
      backgroundColor: 'transparent',
    },
  });