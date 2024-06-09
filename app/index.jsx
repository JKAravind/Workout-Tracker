import { Redirect } from "expo-router";
import { View ,Text} from "react-native";

export default function StartPage(){
  return (
    <Redirect href="/Profile"/>
    
  );
};