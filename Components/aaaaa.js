import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';

const App1 = () =>{
  <View>ngetest</View>
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
      fetch('http://myjson.dit.upm.es/api/bins/2ygj')
      .then((response) => response.json())
      .then((json)=> setData(json.renunganyuk))
      .catch((error)=> console.error(error))
      .finally(() => setLoading(false))
  },[]);
  return(
    <View>
      <Text>DATA NAMA</Text>
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
export default App1;
