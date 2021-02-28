
import {  Content, Card, CardItem, Text, Body, Header, Item,Button, Input, Icon, Container, H1,} from 'native-base';
import React, { useState, useEffect } from "react";


import {  View, TextInput,StyleSheet,FlatList,  ScrollView, Alert, StatusBar, SafeAreaView, ImageBackground} from "react-native";

import { connect } from "react-redux";

import { useForm, Controller } from "react-hook-form";
import {  TouchableOpacity } from 'react-native-gesture-handler';
// import auth from '@react-native-firebase/auth';
import get_users from '../store/action'







function AdminPage(props) {

  const { register,control, handleSubmit, errors } = useForm();

console.log("all=====>",props.all)
console.log("students=====>",props.students)
console.log("companies=====>",props.companies)
  const logout=()=>{
  
    
  
  
    // auth()
    // .signOut()
    // .then(() => console.log('User signed out!'));
    props.navigation.navigate('Home')
    
    
  
  }


 

 return(
     <View>
         <ImageBackground
          
          style={{width:'100%',height:'100%',backgroundColor:'white'}}
          source={require('../assets/admin.jpg')}
          resizeMode='cover'
          >
             <H1 style={{textAlign:'center'}}>Dashboard</H1>
          <View>
          <View style={{display:'flex',flexDirection:"row",padding:0,marginTop:5,justifyContent:'center'}}>
      
        
          <TouchableOpacity onPress={()=>logout()} activeOpacity={0.8} style={styles.btn}>
        <Text style={{fontSize:20}}>Log Out</Text>
        </TouchableOpacity>
        </View>
        </View>
 
        <View>
        <View>
          <View style={{display:'flex',flexDirection:"row",padding:0,marginTop:5,justifyContent:'center'}}>
        <TouchableOpacity  onPress={()=>props.navigation.navigate('students1')} activeOpacity={0.8} style={styles.btn}>
        <Text style={{fontSize:20}}>Students</Text>
        </TouchableOpacity>
        
          <TouchableOpacity  onPress={()=>props.navigation.navigate('companies1')} activeOpacity={0.8} style={styles.btn}>
        <Text style={{fontSize:20}}>Companies</Text>
        </TouchableOpacity>
        </View>
        </View>

        </View>
        </ImageBackground>
     </View>
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
    all:state.all
  })
  const mapDispatchToProps = (dispatch)=>({
   
    get_users:()=>dispatch(get_users())
  })

  export default connect(mapStateToProps,mapDispatchToProps)(AdminPage)