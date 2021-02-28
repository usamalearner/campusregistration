
import * as React from 'react';

import { Text, View, TextInput,StyleSheet, Button, Alert} from "react-native";
import { useForm, Controller } from "react-hook-form";
import {signUp} from '../store/action'
import {connect} from "react-redux";

import auth from '../config/firebase';

import { ScrollView } from 'react-native-gesture-handler';

import database from '@react-native-firebase/database';




function CompanySignup(props){



  const { register,control, handleSubmit, errors } = useForm();
  
  const onSubmit =( data) => {

 

    let keyy = data.email.split("@")
    let correctkey= keyy[0]
    console.log(correctkey)
    auth()
    .createUserWithEmailAndPassword(data.email, data.password)
   
    .then(() => {

      database().ref('/companies').child(correctkey).set(data);
        console.log('User account created & signed in!');
        // props.sign_up(data.email)
        alert("signup successful");
        props.navigation.navigate('companysignin')
     
    
        
       

    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
           alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
        }
    })


   
 
 
 
  
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
            placeholder="Company Name"
            
         />
          
        
        )}
        name="cname"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.cname && alert('This is required')}

      

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
            required={true}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
        
      
      />
      {/* {errors.email && alert('This is required')} */}

<Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Contact No"
            keyboardType={'number-pad'}
            maxLength={13}
            
          />
        )}
        name="phoneno"
        rules={{ required: true }}
        defaultValue=""
        
      
      />
      {/* {errors.phoneno && alert('This is required')} */}

    
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Vacancy"
            
          />
     
        )}
        name="vacancy"
        rules={{ required: true }}
        defaultValue=""
        
      
      />
      {/* {errors.vacancy && alert('This is required')} */}

        <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Location"
            
          />
     
        )}
        name="location"
        rules={{ required: true }}
        defaultValue=""
        
      
      />
    {/* {errors.location && alert('This is required')} */}

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
      {/* {errors.password && alert('This is required')} */}

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
    {/* {errors.city && alert('This is required')} */}

      <Button color="purple" title="Submit" onPress={handleSubmit(onSubmit)} />
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

export default connect(mapStateToProps,mapDispatchToProps)(CompanySignup);