import { Stack,Link, router, useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Button, ScrollView, FlatList} from 'react-native';
import Timer from '../../src/components/Timer';
import useExerciseStore from '../../src/Zustand/useExerciseStore';
import SetsRep from '../../src/components/SetsRep';

export default function Startworkout(){
  const router = useRouter();
  const selectedExercise = useExerciseStore((state)=>state.selectedExercise);
  console.log(selectedExercise)

  return(
    <View style={style.container}>
          <Stack.Screen 
          options={{
            title:'Start Workout',
            headerRight:()=><Button title='FINISH'></Button>
          }}/>

      <View style={style.timeContainter}>
            <Text style={style.text}>  
            Time:
            </Text>
            <Timer/>
      </View>

        <View style={style.view}>
            <FlatList
            style = {style.view}
            data = {selectedExercise}
            renderItem={({item}) =>(
              <View style = {style.exerciseContainer}>
                    <Text style = {style.exerciseName}>{item.name}</Text>
                    <Text style = {style.exerciseSubtitle}>{item.muscle} || {item.equipment}</Text>
              <SetsRep name={item.name}/>
              </View>
            )}
            />
            <Button style={style.Button} title='ADD EXERCISE'  onPress={()=>router.push('/Startworkout/SearchBar')}
            />
        </View>

      </View>

  );
}
const style = StyleSheet.create({
  container:{
  flex:1,
},
  Button:{
    
  },
  view:{
    display:'flex',
    padding:15,
  },

SearchBar:{
  alignItems:'center',
  justifyContent:'flex-start',
  flex:1,
  padding:20
},
exerciseName :{
  fontSize :17,
  fontFamily: 'sans-serif',
  letterSpacing:1,
  fontWeight:'100'
},
exerciseSubtitle:{
  fontSize:10,
  letterSpacing:2,
  color:"grey"
},
exerciseContainer:{
  backgroundColor:"white",
  padding:10,
  borderRadius:8,    
  margin:7
},
InputBox:{
  flexDirection:'row',
  alignItems:'center',
  backgroundColor: '#fff',
  borderRadius: 5,
  paddingHorizontal: 10,
  elevation:4,
  width:'100%'
},

  timeContainter:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:'10'
  },
  text:{
    padding:10,
    fontWeight:'600',
    fontSize:20
  }
  
})