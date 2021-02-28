import * as React from 'react';

import { View, Text,Button, ImageBackground ,Linking} from 'react-native';



function Student(props) {

    return (
        <ImageBackground
          
        style={{width:'100%',height:'100%',backgroundColor:'white'}}
        source={require('../assets/s.jpeg')}
        resizeMode='cover'
        >
        <View>
            <Text style={{marginLeft:25,marginBottom:10,marginTop:10}}>
        <Button color="#C70039"  titleStyle={{
       color: "white",
       fontSize: 30,
       padding:20,
   }} 
   onPress={()=>props.navigation.navigate('studentsignin')} 
   title="&nbsp;Sign in  &nbsp;"></Button>
        </Text>

        <Text style={{marginLeft:25,marginBottom:10,marginTop:10}}>
        <Button color="#C70039"  titleStyle={{
       color: "white",
       fontSize: 30,
       padding:20,
   }} 
   onPress={()=>props.navigation.navigate('studentsignup')} 
   title="&nbsp; Register  &nbsp;"></Button>
        </Text>
        </View>
        </ImageBackground>
    )
}

export default Student;