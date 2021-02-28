// In AppNav.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';

import Signin from '../screens/signin';

import Student from '../screens/Student';
import Students1 from '../screens/students1';
import Companies1 from '../screens/companies1';
import Admin from '../screens/admin';
import Company from '../screens/company';
// import Page from '../screens/page';
import Details from '../screens/Details';
import StudentDetails from '../screens/studentDetails';
import About from '../screens/about';
import Profile from '../screens/profile';
import StudentSignin from '../screens/studentsignin';
import CompanySignin from '../screens/companysignin';
import { StyleSheet, Text, View, Image } from 'react-native';
import StudentSignup from '../screens/studentsignup';
import CompanySignup from '../screens/companysignup';
import StudentPage from '../screens/studentpage';
import AdminPage from '../screens/adminpage';
import CompanyPage from '../screens/companypage';
// import StudentSignup from '../screens/studentsignup';
// import signUp from '../store/action'
// import store from '../store'


const Stack = createStackNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{
          title:"NED UNIVERSITY",
          headerStyle:{backgroundColor:"purple"},
            headerTitle:props=> <Text style={{color:'white',fontSize:20,textAlign:'center'}}>NED UNIVERSITY</Text>
}} 
      
      name="Home" component={Home} />


        {/* <Stack.Screen  options={{
    headerShown: false
  }} name="Page" component={Page} /> */}

<Stack.Screen options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Student Area</Text>

        }}  name="Student" component={Student} />

<Stack.Screen options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Company Area</Text>

        }}  name="Company" component={Company} />

<Stack.Screen options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Admin Area</Text>

        }}  name="Admin" component={Admin} />

<Stack.Screen options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>My Profile</Text>

        }}  name="profile" component={Profile} />






        <Stack.Screen options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Sign Up</Text>

        }}  name="studentsignup" component={StudentSignup} />
         <Stack.Screen options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Sign Up</Text>

        }}  name="companysignup" component={CompanySignup} />



<Stack.Screen options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Sign In Student</Text>

        }}  name="studentsignin" component={StudentSignin} />
         <Stack.Screen options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Sign In Company</Text>

        }}  name="companysignin" component={CompanySignin} />

        <Stack.Screen  options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Sign In Admin</Text>

        }} name="Signin" component={Signin} />

<Stack.Screen  options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Students</Text>

        }} name="students1" component={Students1} />

<Stack.Screen  options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Companies</Text>

        }} name="companies1" component={Companies1} />




<Stack.Screen options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Student Area</Text>

        }}  name="studentpage" component={StudentPage} />

<Stack.Screen options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Company Area</Text>

        }}  name="companypage" component={CompanyPage} />

<Stack.Screen options={{
          headerStyle:{backgroundColor:'purple'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Admin Area</Text>

        }}  name="adminpage" component={AdminPage} />


        <Stack.Screen
        options={{
          headerStyle:{backgroundColor:'purple'}
        }} name="Details" component={Details} />

<Stack.Screen
        options={{
          headerStyle:{backgroundColor:'purple'}
        }} name="StudentDetails" component={StudentDetails} />
         
            <Stack.Screen
        options={{
          headerStyle:{backgroundColor:'purple'}
        }} name="About" component={About} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNav;