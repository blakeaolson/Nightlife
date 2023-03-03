import * as React from 'react';
import { Text, ScrollView } from 'react-native';

export default function AddEvent() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color:'white'}}>Add Event</Text>
        </ScrollView>
    );
}