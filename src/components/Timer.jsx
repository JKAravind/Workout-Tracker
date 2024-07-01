import React, { useEffect } from "react";
import { useState } from "react";
import { View,Text } from "react-native"



export default function Timer(){

    const[seconds,setSeconds] = useState(0);
    const[minutes,setMinutes] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds(prev => {
                if (prev === 60){
                    setMinutes(prevMin=> prevMin+=1);
                    return 0;
                }
                else{
                    return prev+1;
                }
            }
    )},1000);
    },[])

    return(
        <View>
            <Text>{minutes}:{seconds}</Text>
        </View>
    );



}

