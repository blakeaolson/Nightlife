import * as React from 'react';
import { Text, ScrollView, SafeAreaView, View} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function Profile() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{ flex: 1, marginTop: 20}}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color:'white', textAlign:'center'}}>Profile</Text>
            <View style={{ flex: 0.1, justifyContent: 'space-between', backgroundColor:'rgb(16, 16, 16)'}}></View>
        </ScrollView>
      </SafeAreaView>
      
    );
}