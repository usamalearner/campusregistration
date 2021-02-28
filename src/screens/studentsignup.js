
import * as React from 'react';

import { Text, View, TextInput,StyleSheet, Button, Alert} from "react-native";
import { useForm, Controller } from "react-hook-form";
import {signUp} from '../store/action'
import {connect} from "react-redux";

import auth from '../config/firebase';

import { ScrollView } from 'react-native-gesture-handler';

import database from '@react-native-firebase/database';




function StudentSignup(props){



  const { register,control, handleSubmit, errors } = useForm();
  
  const onSubmit =( data) => {

    console.log(data)
    let keyy = data.email.split("@")
    let correctkey= keyy[0]
    console.log(correctkey)
    auth()
    .createUserWithEmailAndPassword(data.email, data.password)
   
    .then(() => {
      let {fname,lname,email} =data;
    
      // let keyy = `user_${lname}${fname}`
      database().ref('/students').child(correctkey).set(data);
        console.log('User account created & signed in!');
        props.sign_up(data.email)
        alert("signup successful");
        props.navigation.navigate('studentsignin')
     
    
        
       

    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
           alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
        }
    })
    


   

//  props.navigation.navigate('studentsignin')
 
  
  }
  
  

 
 
  
    return(
      <ScrollView>
        <View style={{backgroundColor:'#EEEDED'}}>
      <Controller
      
        control={control}
      
        render={({ onChange, onBlur, value }) => (
          
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="First Name"
            
         />
          
        
        )}
        name="fname"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.fname && alert('This is required')}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Last Name"
            
          />
        )}
        name="lname"
        rules={{ required: true }}
        defaultValue=""
        
      
      />

<Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Email Address"
            keyboardType={'email-address'}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
        
      
      />

<Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Mobile No"
            keyboardType={'number-pad'}
            maxLength={13}
            
          />
        )}
        name="phoneno"
        rules={{ required: true }}
        defaultValue=""
        
      
      />
       <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Gender"
            
          />
     
        )}
        name="gender"
        rules={{ required: true }}
        defaultValue=""
        
      
      />
<Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Department"
            
          />
     
        )}
        name="department"
        rules={{ required: true }}
        defaultValue=""
        
      
      />

<Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            keyboardType={'number-pad'}
            placeholder="Batch"
            
          />
     
        )}
        name="batch"
        rules={{ required: true }}
        defaultValue=""
        
      
      />


      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            keyboardType={'number-pad'}
            value={value}
            placeholder="Age"
            
          />
     
        )}
        name="age"
        rules={{ required: true }}
        defaultValue=""
        
      
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            keyboardType={'number-pad'}
            placeholder="CGPA"
            
          />
     
        )}
        name="cgpa"
        rules={{ required: true }}
        defaultValue=""
        
      
      />
        <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Address"
            
          />
     
        )}
        name="address"
        rules={{ required: true }}
        defaultValue=""
        
      
      />


<Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Password"
            secureTextEntry={true}
            
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
        
      
      />
        <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="City"
            
          />
     
        )}
        name="city"
        rules={{ required: true }}
        defaultValue=""
        
      
      />


      <Button  color="purple" title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>



    </ScrollView>
    )
    
}
const styles = StyleSheet.create({
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
  }
})
const mapStateToProps = (state)=>({
  users : state.users,
  current_user:state.current_user,
  userDetails:state.userDetails,
 
  
  
 
})
const mapDispatchToProps = (dispatch)=>({
  sign_up:(data)=>dispatch(signUp(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(StudentSignup);