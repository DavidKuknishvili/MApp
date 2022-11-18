import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


import { FirebaseMAuth } from '../../firebase-config'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { TouchableOpacity } from 'react-native-gesture-handler';






export default function ProfileL() {

  const navigation = useNavigation(); 



  const [id, setid] = React.useState('')

  React.useEffect(()=>{
    onAuthStateChanged(FirebaseMAuth, (user) => {
      if (user) {
        console.log(user.uid)
        setid(user.email)

  
      } else {
        console.log('ar aris avtorizebuli')
        setid('')
      }
    });



  },[id])
  
  const logout = () => {
    
    signOut(FirebaseMAuth).then(() => {
        navigation.navigate('Profile')
      }).catch((error) => {
        // An error happened.
      });
  }
  return (
    <View>
      <Text>{id}</Text>
      <TouchableOpacity onPress={()=>{logout()}}>

        <Text style={{  color:'#000', fontSize:16}}>logout</Text>


      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

})