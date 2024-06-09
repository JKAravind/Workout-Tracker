import React from "react";
import { View,Text, StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router/build/exports";
import { useQuery } from "@tanstack/react-query";
import client from "../../src/graphql/GraphqlClient";
import { gql } from "graphql-request";


export default function Tab() {
  const exerciseQuery = gql
    `
  query exercise {
    exercise {
      name
      muscle
      equipment
    }
  }
  `;

  const {data,error} = useQuery({
    queryKey:['exercises'],
    queryFn:()=>{
      return client.request(exerciseQuery);
    }
  });
  
  if (error){
    return <Text>errorf;</Text>
  }


    return (
      
      <View style={style.container}>

        <FlatList 
        data = {data?.exercise}
        contentContainerStyle = {{gap:10}}

        renderItem={({item})=>{
          return(
            <Link style={style.exerciseContainer} href ={`/ExercisesDetails/${item.name}`}  >
            <View style = {style.exerciseContainer}>
              <Text style = {style.exerciseName}>{item.name}</Text>
              <Text style = {style.exerciseSubtitle}>{item.muscle} || {item.equipment}</Text>
            </View>
        </Link>            
          );
        }}
        />
      </View>
    );
  }

  const style = StyleSheet.create({
    container :{
      justifyContent:"center",
      padding: 10
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
      padding:7,
      borderRadius:8,      
    }

  })