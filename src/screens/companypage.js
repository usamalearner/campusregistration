
import {  Content, Card, CardItem, Text, Body, Header, Item,Button, Input, Icon, Container, H1,} from 'native-base';
import React, { useState, useEffect } from "react";


import {  View, TextInput,StyleSheet,FlatList,  ScrollView, Alert, StatusBar, SafeAreaView, ImageBackground} from "react-native";

import { connect } from "react-redux";

import { useForm, Controller } from "react-hook-form";
import {  TouchableOpacity } from 'react-native-gesture-handler';
// import auth from '@react-native-firebase/auth';
import get_users from '../store/action'
import auth from '@react-native-firebase/auth';







function CompanyPage(props) {
//   useEffect(() => {
//       props.get_users();
//     },[]);
  const { register,control, handleSubmit, errors } = useForm();



console.log("students=====>",props.students)
console.log("companies=====>",props.companies)
let {students,companies} = props
  const logout=()=>{
  
    
  
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  props.navigation.navigate('Home')
  
  }

 

 return(

  <ScrollView>
<ImageBackground
          
          style={{width:'100%',height:'100%',backgroundColor:'white'}}
          source={require('../assets/c.png')}
          resizeMode='contain'
          >
          <View>
          <View style={{display:'flex',flexDirection:"row",padding:0,marginTop:5,justifyContent:'center'}}>
        
          <TouchableOpacity onPress={()=>logout()} activeOpacity={0.8} style={styles.btn}>
        <Text style={{fontSize:20}}>Log Out</Text>
        </TouchableOpacity>
        </View>
        
        <H1 style={{textAlign:'center',backgroundColor:'blue',color:'white'}}>List Of Students Registered</H1>
        
        
             {students.map((v,i)=>{
              
          return(
        
           <View key={i}>
        
         <Card style={{backgroundColor:'#EEEDED'}} >
          
           <CardItem style={{backgroundColor:'#EEEDED'}}>
             <Body>
            <Text style={{fontSize:20}}>Name : {v.fname} {v.lname} </Text>
            <Text style={{fontSize:20}}>
                Email : {v.email}
              </Text>
              <Text style={{fontSize:20}}>
                Department : {v.department}
              </Text>
              <Text style={{fontSize:20}}>
                CGPA : {v.cgpa}
              </Text>
              </Body>
              </CardItem>
              <CardItem style={{backgroundColor:'#EEEDED'}} footer button onPress={() => props.navigation.navigate(`StudentDetails`,v)}>
             <Text style={{backgroundColor:"purple",color:'white',padding:10,borderRadius:10}}>Details</Text>
           </CardItem>
              </Card>
          
          
        </View>
          )
        })}
        
        
        </View>
             </ImageBackground>
  </ScrollView>
  
 )
}
         
 
        const styles = StyleSheet.create({
        
          container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
            maxHeight:50
          },
          item: {
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
          },
          title: {
            fontSize: 32,
          },
          input: {
            display:'flex',
            fontSize:14,
            color:'black',
        
          },
          button: {
            
          
            padding: 10,
            borderRadius: 4,
            width:10,
            backgroundColor:'red',
          },
          btn:{
            backgroundColor:'pink',
            fontSize:28,
            padding:10,
            margin:5,
            borderRadius:10
          }
        })

  const mapStateToProps = (state)=>({
    students : state.students,
    companies:state.companies,
    current_user:state.current_user
  })
  const mapDispatchToProps = (dispatch)=>({
   
    // get_users:()=>dispatch(get_users())
  })

  export default connect(mapStateToProps,mapDispatchToProps)(CompanyPage)