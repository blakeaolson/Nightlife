import * as React from 'react';
import { Text, ScrollView} from 'react-native';

export default function Main() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', color:'white'}}>Home</Text>
      </ScrollView>
    );
}