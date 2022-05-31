import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';

const App3 = () =>{
  <View>ngetest</View>
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
      fetch('http://myjson.dit.upm.es/api/bins/3llv')
      .then((response) => response.json())
      .then((json)=> setData(json.profile))
      .catch((error)=> console.error(error))
      .finally(() => setLoading(false))
  },[]);
  return(
    <View>
      {
        loading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={(id)=>id}
            renderItem={({item}) => (
              <Text>{item.name},{item.company}</Text>
          )}
          />
        )
      }
    </View>

  )
}
export default App3;