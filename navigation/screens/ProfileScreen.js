import { StyleSheet,RefreshControl, Text, ScrollView, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import { useNavigation } from '@react-navigation/native';

import { getAuth, onAuthStateChanged } from "firebase/auth";




export default function ProfileScreen() {
  const navigation = useNavigation(); 


//   const [cont, setCont] = React.useState( <View style={{display:'flex', height:height, justifyContent:'center',alignItems:'center'}}>
//   <TouchableOpacity onPress={()=>{navigation.navigate('Registartion')}}>
//     <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
//         colors={['#DB4346', '#AA2828']} 
//         style={{height:60,  width:200,borderRadius:20, justifyContent:'center', flexDirection:'row', alignItems:'center', marginBottom:10}}>
//             <Text style={{  color:'#fff', fontSize:16}}>Registration</Text>
//     </LinearGradient>
//   </TouchableOpacity>

//   <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
//     <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
//         colors={['#fff1', '#fff1']} 
//         style={{height:60,  width:200,borderRadius:20, justifyContent:'center', flexDirection:'row', alignItems:'center', marginBottom:10}}>
//             <Text style={{  color:'#fff', fontSize:16}}>Login</Text>
//     </LinearGradient>
//   </TouchableOpacity>
// </View>
// )

  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
      
      
  //     console.log(user.email,'----------------------------')
      
  //     setCont()


  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });
  

  return (
    <SafeAreaView style={styles.mainConatiner}>

      <View>

        <View style={{display:'flex', height:height, justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Registartion')}}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#DB4346', '#AA2828']} 
                style={{height:60,  width:200,borderRadius:20, justifyContent:'center', flexDirection:'row', alignItems:'center', marginBottom:10}}>
                    <Text style={{  color:'#fff', fontSize:16}}>Registration</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#fff1', '#fff1']} 
                style={{height:60,  width:200,borderRadius:20, justifyContent:'center', flexDirection:'row', alignItems:'center', marginBottom:10}}>
                    <Text style={{  color:'#fff', fontSize:16}}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainConatiner:{
    flex:1,
    backgroundColor:'#1A1A1D'
  },
  registration:{
    width:150,
    height:50,
    backgroundColor:'#fff'

  }
})