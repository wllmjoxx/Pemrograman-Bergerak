import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';

const App2 = () =>{
  <View>ngetest</View>
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
      fetch('http://myjson.dit.upm.es/api/bins/byj7')
      .then((response) => response.json())
      .then((json)=> setData(json.jamibadahH))
      .catch((error)=> console.error(error))
      .finally(() => setLoading(false))
  },[]);
  return(
    <View>
      <Text>JADWAL IBADAH</Text>
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
export default App2;
