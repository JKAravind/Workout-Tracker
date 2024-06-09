import { useLocalSearchParams } from "expo-router/build/hooks";
import { View,Text, TextInput,StyleSheet,ActivityIndicator } from "react-native";
import React from "react";
import { useState } from "react";
import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import client from "../../src/graphql/GraphqlClient";
import SetsRep from "../../src/components/SetsRep";

const exerciseQuery = gql`
query exercise( $name: String) {
  exercise(name: $name) {
    name
    muscle
    equipment
    instructions
  }
}
`;

export default function ExerciseDetailsScreen() {

  const {name} = useLocalSearchParams();
  const[showInstruction,IsshowInstruction] = useState(false)
  const trigger_seemore = ()=>{
    IsshowInstruction(i=>i=!showInstruction)
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ['exercises', name],
    queryFn: () => client.request(exerciseQuery, { name }),
  });


  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

  

  const exercise = data.exercise[0];

  return(
      <View
      style={style.cointainer}>

          <View style = {style.exerciseContainer}>
            <Text style = {style.exerciseName}>{exercise.name}</Text>
            <Text style = {style.exerciseSubtitle}>{exercise.muscle} || {exercise.equipment}</Text>
          </View>

          <View style={style.exerciseContainer}>
              <Text style = {style.exercise_info}
              numberOfLines={showInstruction ?0:3}>{exercise.instructions}</Text>

              <Text onPress={trigger_seemore}
              style={style.seemore}>See More..</Text>
          </View>

          <SetsRep name={exercise.name}></SetsRep>



      </View>   
      
  );
}

const style = StyleSheet.create({
      exerciseName :{
        fontStyle:"normal",
        fontSize :25,
        fontFamily: 'sans-serif',
        letterSpacing:1
      },
      exerciseSubtitle:{
        fontSize:15,
        letterSpacing:2,
        color:"grey"
      },
      exerciseContainer:{
        backgroundColor:"white",
        padding:10,
        borderRadius:8,
        margin:4
        
      },
    input:{
        height:20,
        width: 50
    },
    cointainer:{
        flex:1,
        padding:10
    },
    exercise_info:{
        letterSpacing:1,
        lineHeight:20,
        fontSize:15,
        fontFamily: 'sans-serif',
      },
    seemore:{
      justifyContent:'center',
      alignItems:'center',
      fontWeight:'600'
    },
    exercise_name:{
        fontWeight:'600',
        padding:7,
        fontSize:20
    }
})