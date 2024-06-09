import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Button, ScrollView } from 'react-native';


export default function Startworkout(){

  const [time,settime] = useState(0);

  const[workout_going,workout_finish] = useState(true);


  useEffect(()=>{
    if (workout_going){
      let timer = setInterval(() => {
        settime(prv => prv+1)
      }, 1000);

      return()=>clearInterval(timer)

    }
  },[workout_going])


  const finish_btn = ()=>{
    workout_finish (ongoing=>!ongoing)
  }










  return(
    <View style={style.container}>
      <ScrollView>
      <Text>{time}</Text>
      
      </ScrollView>

      <View>
      <Button title='Finish workout'
      onPress={finish_btn}
      style = {style.finish_btn}></Button>

      </View>
      
    </View>

  );
}
const style = StyleSheet.create({
  container:{
  flex:1,justifyContent:'center',
  alignItems:'center'
},
  finish_btn:{

    position: 'absolute',
    bottom: 20,
    backgroundColor: 'green',
    padding: 10,

}})