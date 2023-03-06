import * as React from 'react';
import { Text, ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import { Image, SearchBar } from 'react-native-elements';
import Friend from '../components/friend';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Profile() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', color:'white', textAlign:'center', marginTop: 5}}>Profile</Text>
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
          platform='default'
        ></SearchBar>
        <ScrollView>
            <Text style={{color: 'lightgrey', fontWeight:'600', marginLeft:10, marginTop: 20}}>MY FRIENDS</Text>
            <Friend></Friend>
            <Friend></Friend>
            <Friend></Friend>
            <Friend></Friend>
            <Friend></Friend>
            <Friend></Friend>
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
    height: '12%',
    width: '96%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(16, 16, 16)',
    borderRadius: 12,
    marginTop: 10,
    paddingLeft: 20,
    position: 'fixed',
    marginLeft: 'auto',
    marginRight: 'auto',
  },


});