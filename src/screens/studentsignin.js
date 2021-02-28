import * as React from 'react';
import auth from '@react-native-firebase/auth';
import { connect } from "react-redux";
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native';
import { useState,useEffect } from 'react';
import { get_students } from '../store/action';



function StudentSignin(props){
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 useEffect(() => {
    props.get_students();
  },[]);


  let {students,companies} = props
const handleClick=()=>{
  let user ={
    email,
    password,
  }
  console.log(user)
  auth()
  .signInWithEmailAndPassword(user.email, user.password)
  .then(() => {
    alert('signed in!');
    let forwarddata = user
    props.navigation.navigate('studentpage',forwarddata)
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
     alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }

    alert(error);
  });




  
//   auth()
//   .StudentSigninWithEmailAndPassword(user.email, user.password)
//   .then(() => {
//     alert('signed in!');
//     props.navigation.navigate('Page',user.email)
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//      alert('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       alert('That email address is invalid!');
//     }

//     alert(error);
//   });
}


    return(
   
      
      <Container style={{backgroundColor:"#EEEDED"}}>
       
      <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input value={email}  onChangeText={(e)=>setEmail(e)}/>
            </Item>
            
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} value={password}  onChangeText={(e)=>setPassword(e)} />
            </Item>
          </Form>
        </Content> 
        <Button  color="purple" onPress={()=>handleClick()} title="StudentSignin"></Button>
    
       </Container> 
     
        
    )
}

const mapStateToProps = (state)=>({
    students : state.students,
    companies:state.companies,
    // userDetails:state.userDetails,
    // current_user:state.current_user
  })
  const mapDispatchToProps = (dispatch)=>({
   
    get_students:()=>dispatch(get_students())
  })

  export default connect(mapStateToProps,mapDispatchToProps)(StudentSignin)