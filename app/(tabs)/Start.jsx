import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={style.container}>

      <View style={[style.contentContainer,style.elevation]}>
          <Text style={style.text}>New Workout</Text>
          <Link style={style.button} href="/Startworkout">
            <Text style={style.text}>+  Start Empty Workout</Text>
          </Link>
      </View>

    </View>
  );
}
const style = StyleSheet.create({
  container:{
    padding:20,
    flex:1,
    backgroundColor:'white'
  },
  text:{
    fontWeight:'600',
    fontSize:20,
    fontFamily: 'sans-serif',
    padding:15
  },
  contentContainer:{
    flex:0.2,
    padding:10,
    backgroundColor:'white',
    borderBlockColor:'black',
    justifyContent:'flex-start',
    borderRadius:10
    
  },
  
  button:{
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    padding:7,
    borderRadius:10

  },
  elevation:{
    elevation: 10,
    shadowColor: 'black',

  }

})