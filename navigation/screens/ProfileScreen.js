import { StyleSheet,RefreshControl, Text, ScrollView, View} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import Swipe from '../../components/Swipe'



const wait = (timeout) => {

  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function ProfileScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  return (
    <SafeAreaView style={styles.mainConatiner}>
      <View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor='#fff'
            title='Refresh'
            titleColor='#FFFFFF50'
          />
        }
      >
              <Text>TicketScreen</Text>
        {/* <Swipe /> */}

      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainConatiner:{
    flex:1,
    backgroundColor:'#1A1A1D'
  }
})