import React from "react";
import {StyleSheet, View, Text, AsyncStorage} from "react-native";
import {Button} from "native-base";


const Home = (props) => {
  const handleLogout = () => {
    AsyncStorage.removeItem('token', () => {});
    AsyncStorage.removeItem('username', () => {});
    props.navigation.navigate('StackAuth');
  };

  AsyncStorage.getItem('token', () => {}).then((token) => {if (token === null) props.navigation.navigate('StackAuth')});

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Mantap</Text>
        <Text>Mantap</Text>
        <Text>Mantap</Text>
        <Text>Mantap</Text>
        <Button onPress={() => {handleLogout()}} title={'Logout'}><Text>Logout</Text></Button>
      </View>
      <View style={styles.navigation}>
        <View style={styles.navItem}>
          <View style={styles.navItemIcon}>

          </View>
          <Text>POS</Text>
        </View>
        <View style={styles.navItem}>
          <View style={styles.navItemIcon}>

          </View>
          <Text>Cart</Text>
        </View>
        <View style={styles.navItem}>
          <View style={styles.navItemIcon}>

          </View>
          <Text>Product</Text>
        </View>
        <View style={styles.navItem}>
          <View style={styles.navItemIcon}>

          </View>
          <Text>Category</Text>
        </View>
        <View style={styles.navItem}>
          <View style={styles.navItemIcon}>

          </View>
          <Text>Report</Text>
        </View>
      </View>
    </View>
  )
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    backgroundColor: 'green',
    flexDirection: 'row',
    height: 50,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 4,
  },
  navItemIcon: {
    height: 25,
    width: 25,
  },
  content: {
    flex: 1,
  }
});
