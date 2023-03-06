import React from 'react';
import { StyleSheet, View} from "react-native";
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'reanimated-bottom-sheet';

export default function EventModal(){
  const sheetRef = React.useRef(null);

  const renderContent = () => (
    <View
    style={{
      backgroundColor: 'rgb(16, 16, 16)',
      height: 300,
    }}
    >
    </View>
  );
  
  return (
    <>
      <Button onPress={() => sheetRef.current.snapTo(0)}
          buttonStyle={styles.buttonStyle}
          icon={
            <Icon
            name='add'
            size={30}
            style={{
              alignSelf: 'center',
              color: 'grey',
            }}
            />
          }
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[300, -30]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={1}
      />
    </>
  );
}

const styles = StyleSheet.create({
	buttonStyle: {
    backgroundColor:'transparent',
    margin: 0,
  },
});