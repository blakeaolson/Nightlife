import * as React from 'react';
import { Text, ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import { Image, SearchBar } from 'react-native-elements';
import Friend from '../components/friend';

export default function Profile() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', color:'white', textAlign:'center'}}>Profile</Text>
        <View style={styles.profileview}>
              <Image
              source={require('./profile_img.png')}
              style={{width: 50, height: 50,  borderRadius: 400/2}}
              ></Image>
              <View style={{marginLeft:10}}>
                <Text style={{color: 'white', fontWeight:'600', fontSize:16}}>Username</Text>
                <Text style={{color: 'grey', fontSize: 16}}>The current status of user</Text>
              </View>
        </View>
        <SearchBar
          inputStyle={{backgroundColor: 'rgb(16, 16, 16)'}}
          inputContainerStyle={{backgroundColor: 'rgb(16, 16, 16)'}}
          containerStyle={{backgroundColor: 'transparent'}}
          placeholderTextColor={'grey'}
          placeholder={'Add or search friends'}
        ></SearchBar>
        <ScrollView contentContainerStyle={{ flex: 1, marginTop: 20}}>
            <Text style={{color: 'lightgrey', fontWeight:'600', marginLeft:10}}>MY FRIENDS</Text>
            
            <Friend></Friend>
            <Friend></Friend>
            <Friend></Friend>
            <Friend></Friend>
        

        </ScrollView>
      </SafeAreaView>
      
    );
}

const styles = StyleSheet.create({
  profileview: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(16, 16, 16)',
    borderRadius: 20,
    marginTop: 30,
    paddingLeft: 30,
  },


});