import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { renungan } from './Renungan';
import { TouchableHighlight } from 'react-native-gesture-handler';
import App1 from './Components/aaaaa';
import App2 from './Components/bbbbb';
import App3 from './Components/profileccccc';


// Screen Home
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homes}>
      <Text>Home Screen</Text>
      
      <Button style={styles.HomeButtonHome}
        title="Home"
        onPress={() => navigation.navigate('Youth & Umum')}
      />

      <Button style={styles.JamIbadahButtonHome}
        color="red"
        title="Jam Ibadah"
        onPress={() => navigation.navigate('Jam Ibadah')}
      />
      <Button style={styles.MenuButtonHome}
        color="black"
        title="Menu"
        onPress={() => navigation.navigate('Profiles')}
      />
      <Button
        color="green"
        title="Renungan"
        onPress={() => navigation.navigate('Renungan')}
      />
      <Button
        color="black"
        title="Account"
        onPress={() => navigation.navigate('Sign in/Register')}
      />
    </View>
    
  );
  
}

function YouthUmumScreen({ route, navigation }) {
  return (
    <View style={styles.youthbutton}>
      <Text>Selamat datang, Jonathan</Text>
      <Button 
        title="Youth"
        onPress={() => navigation.navigate('Jam Ibadah')}
      />
      <Button title="Umum" onPress={() => navigation.navigate('Jam Ibadah')} />

      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

// Screen Detail
function DetailsJamScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Jam Ibadah Umum</Text> */}
      {/* <Text>Pagi 08.00 WIB</Text>
      <Text>Live on YouTube: GGP Elim</Text>
      <Text>Pagi 10.00 WIB</Text>
      <Text>Live on YouTube: GGP Elim</Text>

      <Text>Jam Ibadah Youth</Text>
      <Text>Pagi 08.00 WIB</Text>
      <Text>Live on Instagram: Youth Elim</Text>
      <Text>Pagi 10.30 WIB</Text>
      <Text>Live on Instagram: Youth Elim</Text> */}

      <App2/>



      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      /> */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

// Screen Profile
function ProfilesScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <App3/>

      <Button
        color="black"
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack(previous.stack)} />
      {/* <Button
        color="green"
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

function SignInScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Selamat datang di Aplikasi GGP Elim Mobile</Text>
      <Text>Sign in</Text>
      <Text>Register</Text>

      <Button
        color="black"
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* <Button
        color="green"
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}



function RenungaScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Renungan Harian</Text>
      <App1/>
      
      


      <Button
        color="black"
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* <Button
        color="green"
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

// Stack berguna untuk routing aplikasi
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Youth & Umum" component={YouthUmumScreen} />
        <Stack.Screen name="Jam Ibadah" component={DetailsJamScreen} />
        <Stack.Screen name="Profiles" component={ProfilesScreen} />
        <Stack.Screen name="Sign in/Register" component={SignInScreen} />
        <Stack.Screen name="Renungan" component={RenungaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello Worlds</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
   homes: {
    borderWidth: 5,
    height: 200,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign:'center',
    flex: 10,
  },
  youthbutton: {
      marginTop: 10,
      marginBottom: 5,
       marginLeft: 35,
       marginRight: 35,
       borderColor: 'red',
       borderWidth: 3,
  },
  pilihan: {
    justifyContent:'center', 
    flex: 1, 
    alignItems: 'center', 
    borderWidth: 5
  },
  HomeButtonHome: {
    width:10, 
    height:20, 
    borderWidth:5,
  },
  gambar2: {
    width:230, 
    height:230, 
    borderWidth:5,
  },
  deskripsi: {
    borderWidth: 3,
    height: 100,
    padding: 35,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 3,
    marginRight:3,
    textAlign:'center',
    flex: 10,
  },
  
  tulisan_judul: {
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 3,
    marginRight:3,
    textAlign:'center',
  },
});