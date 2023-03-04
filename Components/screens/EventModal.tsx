import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Text } from 'react-native-elements';
import Modal from "react-native-modal";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function EventModal(){
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button onPress={() => {setModalVisible(true)}}
          buttonStyle={styles.buttonStyle}
          icon={
            <FontAwesome5 name={'plus-square'} size={24}
              style={{
                marginTop: 5,
                alignSelf: 'center',
                color: 'grey',
              }}
            />
          }
      />
      <View>
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.contentView}
        >
          <View style={styles.content}>
            <Text style={styles.contentTitle}>Event</Text>
            <Text style={{color: "white"}}>Add event here</Text>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgb(16, 16, 16)',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
    height: '40%',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
    color: "white",
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
	buttonStyle: {
    backgroundColor:'transparent',
    margin: 0,
  },

});