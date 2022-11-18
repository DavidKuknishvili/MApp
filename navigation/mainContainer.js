import * as React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FirebaseMAuth } from '../firebase-config'
import { getAuth, onAuthStateChanged } from "firebase/auth";


import LottieView from 'lottie-react-native';



import { StyleSheet, Text, View } from 'react-native'

// Screens
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import TicketScreen from './screens/TicketScreen';
import ProfileScreen from './screens/ProfileScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OpenMovie from './screens/OpenMovie';



//Screen names
const homeName = "Home";
const discoverName = "Discover";
const ticketName = "Ticket";
const profileName = "Profile";
const openMovieName = 'OpenMovie'
const registrationName = 'Registartion'
const loginName = 'Login'
const profileLName = 'ProfileL'

const Tab = createBottomTabNavigator();


// import { BottomTabBar } from 'react-navigation-tabs';
import { LinearGradient } from 'expo-linear-gradient';


// icons
import SVGHomeDIcon from '../assets/icons/HomeD.js';
import SVGHomeAIcon from '../assets/icons/HomeA.js';
import SVGDiscoverAIcon from '../assets/icons/DiscoverA.js';
import SVGDiscoverDIcon from '../assets/icons/DiscoverD.js';
import SVGTicketAIcon from '../assets/icons/TicketA.js';
import SVGTicketDIcon from '../assets/icons/TicketD.js';
import SVGProfileAIcon from '../assets/icons/ProfileA.js';
import SVGProfileDIcon from '../assets/icons/ProfileD.js';
import Registration from '../navigation/screens/reg and login/Registration'
import Login from '../navigation/screens/reg and login/Login'
import ProfileL from './screens/ProfileL';

const HomeStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeStackScreen({ navigation, route }) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log(routeName)
    if (routeName === "OpenMovie"){
      console.log(routeName)

      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }else {
      navigation.setOptions({tabBarStyle: {height:70,
        position: 'absolute',
        backgroundColor: '#1A1A1D',
        borderTopWidth: 0.25,
        borderTopColor:'#636363'}});
    }
}, [navigation, route]);

  return (
    <HomeStack.Navigator
      screenOptions={{
    headerShown: false
  }}>
      <HomeStack.Screen
        name={homeName}
        component={HomeScreen}/>
      <DiscoverStack.Screen
        name='OpenMovie'
        component={OpenMovie}/>
    </HomeStack.Navigator>
  );
}



function DiscoverStackScreen({ navigation, route }) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log(routeName)
    if (routeName === "OpenMovie"){
      console.log(routeName)

      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }else {
      navigation.setOptions({tabBarStyle: {height:70,
        position: 'absolute',
        backgroundColor: '#1A1A1D',
        borderTopWidth: 0.25,
        borderTopColor:'#636363'}});
    }
}, [navigation, route]);
  return (
    <DiscoverStack.Navigator
      screenOptions={{
    headerShown: false
  }}>
      <DiscoverStack.Screen
        name={discoverName}
        component={DiscoverScreen}
        />
      <DiscoverStack.Screen
        name={openMovieName}
        component={OpenMovie}/>

    </DiscoverStack.Navigator>
  );
}


function ProfileStackScreen({ navigation, route }) {


  const [screen, setScreen] = React.useState(
    <>

    <ProfileStack.Screen
    name={profileName}
    component={ProfileScreen}/>   
    <ProfileStack.Screen
      name={registrationName}
      component={Registration}/>
    <ProfileStack.Screen
      name={loginName}
      component={Login}/>  
    </>
  )

  const [isStarted, setStarted] = React.useState(false)


  // const auth = getAuth();

  React.useEffect(()=>{
    onAuthStateChanged(FirebaseMAuth, (user) => {
      if (user) {
        setScreen(
          <>
          <ProfileStack.Screen
          name={profileLName}
          component={ProfileL}/>
 
          </> 
        )
        // setStarted(true)
        console.log('daloginebuilia')
  
      } else {
        setScreen(
          <>

          <ProfileStack.Screen
          name={profileName}
          component={ProfileScreen}/>   
          <ProfileStack.Screen
            name={registrationName}
            component={Registration}/>
          <ProfileStack.Screen
            name={loginName}
            component={Login}/>  
          </>
        )
        console.log('araris daloginebuli')

      }
    });


  },[true])

  // onAuthStateChanged(FirebaseMAuth, (user) => {
  //   if (user) {

  //     setStarted(true)

  //   } else {

  //     setStarted(false)
  //   }
  // });







  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log(routeName)
    if (routeName === "Registartion" || routeName === "Login"){
      console.log(routeName)

      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }else {
      navigation.setOptions({tabBarStyle: {height:70,
        position: 'absolute',
        backgroundColor: '#1A1A1D',
        borderTopWidth: 0.25,
        borderTopColor:'#636363'}});
    }
}, [navigation, route]);
  return (
    <ProfileStack.Navigator
      screenOptions={{
      headerShown: false}}>

      {screen}
      {/* <ProfileStack.Screen
          name={profileLName}
          component={ProfileL}/>
      <ProfileStack.Screen
        name={registrationName}
        component={Registration}/>
      <ProfileStack.Screen
        name={loginName}
        component={Login}/> */}
      {/* <ProfileStack.Screen
        name={profileLName}
        component={ProfileL}/> */}

    </ProfileStack.Navigator>
  );
}




// const [getScreecn, setScreen] = React.useState(ProfileScreen)


function MainContainer() {

    return(
        <SafeAreaProvider style={styles.mainConatiner} >


            <NavigationContainer >
                <Tab.Navigator 
                    initialRouteName={homeName}
                    screenOptions={({route})=> ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            let rn = route.name;

                            if (rn === 'homeStack') {
                            iconName = focused ? <SVGHomeAIcon/> : <SVGHomeDIcon/>;
                           

                            } else if (rn === 'discoverStack') {
                                iconName = focused ? <SVGDiscoverAIcon/> : <SVGDiscoverDIcon/>;

                            } else if (rn === ticketName) {
                                iconName = focused ? <SVGTicketAIcon/> : <SVGTicketDIcon/>;

                            } else if (rn === 'profileStack') {
                                iconName = focused ? <SVGProfileAIcon/> : <SVGProfileDIcon/>;
                            }
                            // if (focused){
                            //     return  <LottieView autoPlay={focused}  source={iconName} style={{  height:30, width:30  }} />  
                            // }
                            // else{
                            //     return <LottieView autoPlay={focused}  source={iconName} style={{ opacity:0.8, height:30, width:30  }} />
                            // }
                            return iconName

                        },
                        tabBarLabel:() => {return null}, 
                        headerShown: false,
                        tabBarActiveTintColor: '#FFFFFF',
                        tabBarInactiveTintColor: '#AAABAF',
                        headerShown: false,
                        tabBarStyle: { 
                            height:70,
                            position: 'absolute',
                            backgroundColor: '#1A1A1D',
                            borderTopWidth: 0.25,
                            borderTopColor:'#636363'

                        },
                 


                        
                    })}>
                
                
                <Tab.Screen name='homeStack' component={HomeStackScreen} />
                <Tab.Screen name='discoverStack' component={DiscoverStackScreen} />
                <Tab.Screen name={ticketName} component={TicketScreen} />
                <Tab.Screen name='profileStack' component={ProfileStackScreen} />


                </Tab.Navigator>

            </NavigationContainer>
            
        </SafeAreaProvider>
    )
}
export default MainContainer;









const styles = StyleSheet.create({
    mainConatiner:{

        backgroundColor:'black'
    },
    lottieIcon:{
        height:50,
        width:50
    }
})