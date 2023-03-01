import * as React from 'react';
import { Text, ScrollView } from 'react-native';

export default function Main() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Main" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold', color:'white'}}>Home</Text>
        </ScrollView>
    );
}