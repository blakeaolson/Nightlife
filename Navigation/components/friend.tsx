import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Friend() {
    return (
      <View style={styles.profileview}>
              <Image
              source={require('../screens/profile_img.png')}
              style={{width: 40, height: 40,  borderRadius: 400/2}}
              ></Image>
              <View style={{marginLeft:10}}>
                <Text style={{color: 'white', fontWeight:'600', fontSize:14}}>Username</Text>
                <Text style={{color: 'grey', fontSize: 14}}>Current status of friend</Text>
              </View>
              <FontAwesome5 name='times' size={15}
              style={{
                marginTop: 5,
                alignSelf: 'center',
                color: 'grey',
                marginLeft: 'auto',
              }}
              />
        </View>
    );
}
const styles = StyleSheet.create({
  profileview: {
    height: 60,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 13,
    marginTop: 10,
    paddingLeft: 10,
  },


});