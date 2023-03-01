import * as React from 'react';
import { Text, ScrollView } from 'react-native';

export default function Profile() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Profile" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold', color:'white'}}>Profile</Text>
        </ScrollView>
    );
}