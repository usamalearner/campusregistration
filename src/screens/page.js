
// import {  Content, Card, CardItem, Text, Body, Header, Item,Button, Input, Icon, Container,} from 'native-base';
// import React, { useState, useEffect } from "react";


// import {  View, TextInput,StyleSheet,FlatList,  ScrollView, Alert, StatusBar, SafeAreaView} from "react-native";

// import { connect } from "react-redux";

// import { useForm, Controller } from "react-hook-form";
// import {  TouchableOpacity } from 'react-native-gesture-handler';
// import auth from '@react-native-firebase/auth';
// import get_users from '../store/action'







// function Page(props) {
//   useEffect(() => {
//       props.get_users();
//     },[]);
//   const { register,control, handleSubmit, errors } = useForm();
//   // const [check,setCheck] = useState([{}])


//   const logout=()=>{
  
    
  
//   auth()
//   .signOut()
//   .then(() => console.log('User signed out!'));
//   props.navigation.navigate('Home')
  
//   }


 

//   const [search,setSearch] =useState(
//     {
//       filter: '',
//       data :props.users
    
//     }
//   )

//   const handleChange =(event) => {
//     setSearch(
      
//       { 
//         ...search,
//         filter: event.filter});

//   };
//   const { filter, data } = search;

//   const lowercasedFilter = filter.toLowerCase();
//   const filteredData = data.filter(item => {
//     return Object.keys(item).some(key =>
//       item[key].toLowerCase().startsWith(lowercasedFilter)|| !lowercasedFilter
//     );
//   });

//         return(
//           <ScrollView>

     
//           <View style={{backgroundColor:'#CF2050'}}>
//             <Header style={{backgroundColor:'pink'}} searchBar rounded>
//           <Item>
            
          
//             <Controller
//         control={control}
//         render={({ onChange, onBlur, value }) => (
          
//           <TextInput
//           style={styles.input}
//             onBlur={onBlur}
//             onChangeText={value => onChange(value)}
//             value={value}
//             placeholder="Seach Blood Group or location"
            
//           />
//         )}
//         name="filter"
//         defaultValue=""
        
      
//       />

            
//             <Text style={{position:'absolute',right:15,backgroundColor:'pink',padding:2,borderRadius:5}} onPress={handleSubmit(handleChange)} >Search</Text>
//           </Item>
     
//         </Header>






 
//      <View style={{display:'flex',flexDirection:"row",padding:0,marginTop:5,justifyContent:'center'}}>
//      <TouchableOpacity  onPress={()=>props.navigation.navigate('About')} activeOpacity={0.8} style={styles.btn}>
//     <Text style={{fontSize:20}}>About</Text>
//       </TouchableOpacity>
   
//         <TouchableOpacity onPress={()=>logout()} activeOpacity={0.8} style={styles.btn}>
//     <Text style={{fontSize:20}}>Log Out</Text>
//       </TouchableOpacity>
//      </View>
    
//        {filteredData.map((v,i)=>{
//          return(
//           <View key={v.email}>
//          <Content padder>
//         <Card style={{backgroundColor:'pink'}} >
         
//           <CardItem style={{backgroundColor:'pink'}}>
//             <Body>
//            <Text style={{fontSize:20}}>Name : {v.fname} { v.lname}</Text>
//            <Text style={{fontSize:20}}>
//                Blood Group : {v.bgroup}
//              </Text>
//              <Text style={{fontSize:20}}>
//                Location : {v.location}
//              </Text>
//              </Body>
//              </CardItem>
//              <CardItem style={{backgroundColor:'pink'}} footer button onPress={() => props.navigation.navigate(`Details`,v)}>
//             <Text style={{backgroundColor:"red",color:'white',padding:10,borderRadius:10}}>Details</Text>
//           </CardItem>
//              </Card>
//              </Content>
         
//     </View>
//          )
//        })}
    
 
         
   
    
//         </View>
//         </ScrollView>
//         )
//       }

 
//         const styles = StyleSheet.create({
        
//           container: {
//             flex: 1,
//             marginTop: StatusBar.currentHeight || 0,
//             maxHeight:50
//           },
//           item: {
//             backgroundColor: '#f9c2ff',
//             padding: 20,
//             marginVertical: 8,
//             marginHorizontal: 16,
//           },
//           title: {
//             fontSize: 32,
//           },
//           input: {
//             display:'flex',
//             fontSize:14,
//             color:'black',
        
//           },
//           button: {
            
          
//             padding: 10,
//             borderRadius: 4,
//             width:10,
//             backgroundColor:'red',
//           },
//           btn:{
//             backgroundColor:'pink',
//             fontSize:28,
//             padding:10,
//             margin:5,
//             borderRadius:10
//           }
//         })

//   const mapStateToProps = (state)=>({
//     users : state.users,
//     userDetails:state.userDetails,
//     current_user:state.current_user
//   })
//   const mapDispatchToProps = (dispatch)=>({
   
//     get_users:()=>dispatch(get_users())
//   })

//   export default connect(mapStateToProps,mapDispatchToProps)(Page)