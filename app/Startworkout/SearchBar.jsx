import { View,Text, TextInput, StyleSheet,ActivityIndicator,Button,FlatList, TouchableOpacity} from "react-native";
import React, { useState, useEffect, useCallback} from 'react';
import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import client from "../../src/graphql/GraphqlClient";
import debounce from "lodash.debounce";
import Icon from 'react-native-vector-icons/Ionicons'; 
import {useRouter } from "expo-router";
import useExerciseStore from "../../src/Zustand/useExerciseStore";



export default function SearchBar(){
  const router = useRouter();
  const addExercise = useExerciseStore((state)=>state.addExercise)
  const selectedExercise = useExerciseStore((state)=>state.selectedExercise)

  const Search = gql`
    query Search($name:String) {
        exercise(name:$name) {
            name
            type
            muscle
            equipment
  }
}
    `

    const [search, setSearch] = useState("");
    const[isTextInputFocused,setIsTextInputFocused]=useState(false);
    const[queryenable,isQueryenable] = useState(false);



    const debouncedSearch = useCallback(
      debounce((value) => {
          isQueryenable(value.length > 0);
      }, 500), // Adjust debounce delay as needed
      []
  );

  const handleInputChange = (value) => {
      setSearch(value); 
      debouncedSearch(value)
      ;}
  const handleAddExercise = (exercise)=>{
    addExercise(exercise)
  }


        const{data,isLoading,error} = useQuery({
            queryKey:['exercises',search],
            queryFn:()=>client.request(Search,{name:search}),
            enabled: queryenable && search.length > 0


      });
        if (isLoading) {
            return <ActivityIndicator />;
          }
        
          if (error) {
            return <Text>Failed to fetch data</Text>;
          }
        

    return(
        <View style ={style.container}>

          <View style={style.InputBox}>
              <Icon name="search" size={20} color="#999"  />
                  <TextInput style={style.Search}
                  placeholder="search exericse"
                  value = {search}
                  onChangeText={handleInputChange}
                  onFocus={()=>setIsTextInputFocused(true)}
                  onBlur={()=>setIsTextInputFocused(false)}>
                  </TextInput>
          </View>
           
          

          {isTextInputFocused && queryenable&&(
            <FlatList
            data={data?.exercise}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>handleAddExercise(item)} >
                <View style = {style.exerciseContainer}>
                  <Text style = {style.exerciseName}>{item.name}</Text>
                  <Text style = {style.exerciseSubtitle}>{item.muscle} || {item.equipment}</Text>
                </View>
              </TouchableOpacity>
            
            )}
          />)}

          <Button title="Done" style={style.Button} onPress={()=>router.back()}/>
        </View>
        
)}
const style = StyleSheet.create({
    Search:{
      flex:1,
      paddingHorizontal:20
    },
    container :{
      padding: 20,
    },
    Button:{
      flex:1
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
      margin:4  
    },
    InputBox:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingHorizontal: 10,
      elevation:4,
      width:'100%',
      padding:10,
      margin:10
    }
})