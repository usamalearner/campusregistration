import * as React from 'react';
import auth from '@react-native-firebase/auth';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native';
import { useState,useEffect } from 'react';
import { get_companies } from '../store/action';
import { connect } from 'react-redux';
function CompanySignin(props){
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 useEffect(() => {
    props.get_companies();
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
    let forwarddata = [students,companies,user]
    props.navigation.navigate('companypage',forwarddata)
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
        <Button  color="purple" onPress={()=>handleClick()} title="CompanySignin"></Button>
    
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
   
    get_companies:()=>dispatch(get_companies())
  })

  export default connect(mapStateToProps,mapDispatchToProps)(CompanySignin)