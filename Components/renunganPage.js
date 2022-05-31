import React, {Component} from 'react'
import {View, Text, FlatList, Image,TouchableHighlight} from 'react-native'
import { Button } from 'react-native-web';
import { renungan } from './Renungan';



export default class renunganPage extends Component{
    constructor(props) {
        super(props)
        this.state = {};
    }
    renderRenungan = ({item}) => {
        return(
          <TouchableHighlight>
            <View>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Text>{item.nama}</Text>
      
            </View>
          </TouchableHighlight>
      
        )
      
      }
    render() {
        return(
            <View>
                <FlatList
                data={renungan}
                renderItem={this.renderRenungan}
                keyExtractor={(id) => id}
                />
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        )
    }
}
