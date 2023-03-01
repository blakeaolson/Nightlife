import * as React from 'react';
import { Text, ScrollView } from 'react-native';

export default function Friends() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Friends" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold', color:'white'}}>Friends</Text>
        </ScrollView>
    );
}