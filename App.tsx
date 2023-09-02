import React, { useState } from 'react';
import {Button, Text, TextInput, StyleSheet, View} from 'react-native';


const HelloWorldApp = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("")
  const [names, setNames] = useState([])

  const sayHello = () =>{
    setCounter(counter +1)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        

      
      {counter < 10 ? (<Text style={{fontSize:40}}>Hello, world!</Text>):(null)}
      <Text style={{fontSize:40}}>{counter}</Text>
      <Text style={{fontSize:40}}>{name}</Text>
      <Button title="selam" onPress={sayHello}>selamlar</Button>
      <TextInput value={name} onChangeText={setName} style={stylesi.input}></TextInput>

    </View>
  );
};
const stylesi = StyleSheet.create({
  input: {
    height: 40,
    width:300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default HelloWorldApp;