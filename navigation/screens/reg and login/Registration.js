import { TouchableOpacity, StyleSheet, Text,TextInput, View } from 'react-native'
import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FirebaseMAuth } from '../../../firebase-config'
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const Registration = () => {
  const navigation = useNavigation(); 

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [rPassword, setRPassword] = React.useState('')

    const createAccount = () => {
      if(password==rPassword){
        createUserWithEmailAndPassword(FirebaseMAuth, email, password)
        .then((userCredential) => {
          navigation.navigate('ProfileL')
          const user = userCredential.user;
          console.log(user)
          console.log(user,',-------------)')

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)
  
        });
      }

    }
    

  return (
    <View style={styles.mainConatiner}>

        <View style={{display:'flex', alignItems:'center', height:height, justifyContent:'center' }}>

            <Text style={{color:'#fff', fontWeight:'bold', fontSize:30, marginBottom:30}}>Registartion</Text>

            <TextInput style={styles.inp}  onChangeText={(text)=>{setEmail(text)}} placeholder='E-mail' keyboardType='email-address' textContentType='emailAddress' placeholderTextColor={'#fff5'} />
            <TextInput style={styles.inp}  onChangeText={(text)=>{setPassword(text)}} placeholder='Password' textContentType='password'  secureTextEntry={true} placeholderTextColor={'#fff5'} />
            <TextInput style={[styles.inp, {marginBottom:50}]}  onChangeText={(text)=>{setRPassword(text)}} placeholder='R-Password' textContentType='password' secureTextEntry={true}  placeholderTextColor={'#fff5'} />
        
            <TouchableOpacity onPress={()=>{createAccount()}}>

              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                  colors={['#DB4346', '#AA2828']} 
                  style={{height:60,  width:200,borderRadius:20, justifyContent:'center', flexDirection:'row', alignItems:'center', marginBottom:10}}>
                      <Text style={{  color:'#fff', fontSize:16}}>Registration</Text>
              </LinearGradient>

          </TouchableOpacity>
          </View>


    </View>
  )
}

export default Registration

const styles = StyleSheet.create({
    mainConatiner:{
        flex:1,
        backgroundColor:'#1A1A1D'
    },
    inp:{
        backgroundColor:'#fff1',
        paddingStart:15,
        width:width-60,
        height:50,
        borderRadius:10,
        marginBottom:10,
        color:'#fff'
    }

})