import * as React from 'react';
import { Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function User() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop: 10}}>
          <Icon name='arrow-back-outline' color='white' size={25} onPress={() => navigation.goBack()}></Icon>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color:'white'}}>Profile</Text>
        </View>
      </SafeAreaView>
    );
}