import React, { useState } from "react";
import { View ,Text,StyleSheet, TextInput,Button} from "react-native";
import {gql} from "graphql-request";
import client from "../graphql/GraphqlClient";
import { useMutation } from "@tanstack/react-query";



export default function SetsRep({name}){

    const mutateQuery = gql`
    mutation MyMutation($Inputset: Inputset!) {
        insertSet(
            document: $Inputset
            collection: "Sets"
            database: "Workout"
            dataSource: "Cluster0"
        ) {
            Insertedid
        }
    }`

    const {mutate} = useMutation({
        mutationFn:(Inputset)=>client.request(mutateQuery,{Inputset}),
        });

    const [weight,setWeight]= useState("");
    const [rep,setRep] = useState("");

    const addset =()=>{
        console.log(rep,weight)
        mutate({
            name:name,
            reps:weight,
            weight:rep
        })
        //after add set reps and weight to null

        setWeight('');
        setRep('');

    }

    return(
        <View style={style.container}>

            <View style={style.exercisecontainer}>
                <TextInput keyboardType="numeric"
                 placeholder="Weight" 
                 style={style.box_text}
                 onChangeText={setWeight}
                 value={weight}>

                </TextInput>
                <TextInput keyboardType="numeric" 
                value={rep} 
                onChangeText={e=>setRep(e)}
                 placeholder="Rep" 
                 style={style.box_text}></TextInput>
                
                <Button
                title="Add"
                onPress={addset}></Button>
            </View>
            <View>
                <Text>{rep}x{weight}</Text>
            </View>

        </View>
    );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        padding:2,
    },
    exercisecontainer:{
        backgroundColor:'white',
        justifyContent:"space-between",
        padding:10,
        borderRadius:7,
        flexDirection:'row',
        gap:20
    },
    box_text:{
        borderColor:'black',                
    }
})