import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig} from '../../firebase'




export default function Login() {
    const [username, setUsername] = useState('')
    // const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const handleSignUp = () => {
      createUserWithEmailAndPassword(auth, username, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
      navigation.replace("MainNavigation");
    }
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, username, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
        navigation.replace("MainNavigation");
    }

    return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={text => setUsername(text)}
              style={styles.input}
              placeholderTextColor="#A8A8A8"
            />
            {/* <TextInput
              placeholder="Phone Number"
              value={phone}
              onChangeText={text => setPhone(text)}
              style={styles.input}
              placeholderTextColor="#A8A8A8"
            /> */}

            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              placeholderTextColor="#A8A8A8"
              secureTextEntry
            />
          </View>
    
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSignUp}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )
    }
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputContainer: {
        width: '80%'
      },
      input: {
        backgroundColor: '#121212',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        color: "white"
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      button: {
        backgroundColor: '#004A7B',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
      },
      buttonText: {
        color: '#808080',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
      },
    })
