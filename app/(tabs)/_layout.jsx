import React from "react";
import { Tabs } from "expo-router";


export default function Tablayout(){
    return(
        <Tabs >
            <Tabs.Screen 
            name="Profile"
            />
            <Tabs.Screen 
            name="History"
            />
            <Tabs.Screen 
            name="Exercises"
            />
            <Tabs.Screen 
            name="Start"
            />

        </Tabs>

    );
}
