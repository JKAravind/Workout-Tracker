import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';



export default function Tablayout(){
    return(
        <Tabs >
            <Tabs.Screen 
            name="Profile"
            options={{
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/>
            }}
            />
            <Tabs.Screen 
            name="Exercises"
            options={{
                tabBarIcon: ({color})=><FontAwesome size={20} name="tasks" color={color}/>
            }}
            />
            <Tabs.Screen 
            name="Start"
            options={{
                tabBarIcon: ({ color }) => <FontAwesome size={20} name="hourglass" color={color}/>
            }}
            />
        </Tabs>

    );
}
