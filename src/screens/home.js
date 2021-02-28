
import React, { useState, useEffect } from "react";

import { View, Text,Button, ImageBackground ,Linking} from 'react-native';
import { connect } from 'react-redux';
import { get_all,get_companies ,get_students} from '../store/action';




function Home(props) {
    useEffect(() => {
        props.get_all();
        props.get_companies()
        props.get_students()
       
      },[]);


    return (
          <ImageBackground
          
      style={{width:'100%',height:'100%',backgroundColor:'white'}}
      source={require('../assets/pic.png')}
      resizeMode='contain'
      >
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap'}} >


        <Text style={{marginLeft:25,marginBottom:10,marginTop:20}} >
        <Button color="#C70039"  titleStyle={{
       color: "white",
       fontSize: 30,
       padding:20,
   }}
    onPress={()=>props.navigation.navigate('Admin')} 
   title="&nbsp;Admin &nbsp;"></Button>
        </Text>

        <Text style={{marginLeft:25,marginBottom:10,marginTop:20}} >
        <Button color="#C70039"  titleStyle={{
       color: "white",
       fontSize: 30,
       padding:20,
   }}
    onPress={()=>props.navigation.navigate('Student')} 
   title="&nbsp;Student &nbsp;"></Button>
        </Text>

        <Text style={{marginLeft:25,marginBottom:10,marginTop:20}} >
        <Button color="#C70039"  titleStyle={{
       color: "white",
       fontSize: 30,
       padding:20,
   }}
    onPress={()=>props.navigation.navigate('Company')} 
   title="&nbsp;Company &nbsp;"></Button>
        </Text>
       
        <Text style={{marginLeft:25,marginBottom:10,marginTop:5}}>
            <Button color="#C70039"  titleStyle={{
           color: "white",
           fontSize: 30,
           padding:20,
           
       }}
        onPress={()=>Linking.openURL('https://iusama.web.app') } 
        title="&nbsp;Developer  &nbsp;"></Button>
            </Text>
      


        {/* <Text style={{marginLeft:25,marginBottom:10,marginTop:10}}>
        <Button color="#C70039"  titleStyle={{
       color: "white",
       fontSize: 30,
       padding:20,
   }} 
   onPress={()=>props.navigation.navigate('Signin')} 
   title="&nbsp;Sign in  &nbsp;"></Button>
        </Text>


        <Text style={{marginLeft:25,marginBottom:10,marginTop:10}}>
        <Button color="#C70039"  titleStyle={{
       color: "white",
       fontSize: 30,
       padding:20,
       
   }}
    onPress={()=>Linking.openURL('https://iusama.web.app') } 
    title="&nbsp;Developer  &nbsp;"></Button>
        </Text> */}
       
      </View>

      </ImageBackground> 
      
    );
  }

  
  const mapStateToProps = (state)=>({
    students : state.students,
    companies:state.companies,
    all:state.all
    // userDetails:state.userDetails,
    // current_user:state.current_user
  })
  const mapDispatchToProps = (dispatch)=>({
   
    get_students:()=>dispatch(get_students()),
    get_companies:()=>dispatch(get_companies()),
    get_all:()=>dispatch(get_all())
  })

  export default connect(mapStateToProps,mapDispatchToProps)(Home)