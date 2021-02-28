import * as React from 'react';
import auth from '@react-native-firebase/auth';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native';
import { useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { get_all } from '../store/action';
function Signin(props){
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')

 useEffect(() => {
  props.get_all();
},[]);


const handleClick=()=>{

  if(email==="admin@gmail.com" && password==="admin1234"){
    let user ={
      email,
      password,
    }
    console.log(user)
    props.navigation.navigate('adminpage',user.email)
  }
  else{
    alert('Email or Password is Incorrect!');
  }
 


 
 
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
        <Button  color="purple" onPress={()=>handleClick()} title="Signin"></Button>
    
       </Container> 
     
        
    )
}

const mapStateToProps = (state)=>({
  // students : state.students,
  all:state.all,
  // userDetails:state.userDetails,
  // current_user:state.current_user
})
const mapDispatchToProps = (dispatch)=>({
 
  get_all:()=>dispatch(get_all())
})

export default connect(mapStateToProps,mapDispatchToProps)(Signin)