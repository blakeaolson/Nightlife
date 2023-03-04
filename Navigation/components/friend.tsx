import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

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
        </View>
    );
}
const styles = StyleSheet.create({
  profileview: {
    flex: 0.13,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(16, 16, 16)',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 30,
  },


});