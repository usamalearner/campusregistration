import * as React from 'react';

import { View,Button, ActivityIndicator,StyleSheet,Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';



function StudentDetails(props){

      let {fname,lname,batch,department,phoneno,email,address,city,age,gender,cgpa} = props.route.params
    
    return(
      <ScrollView>
         {/* <Container style={{backgroundColor:'#CF2050',alignItems:'center'}}>
        
        <Content padder> */}
          <Card style={{backgroundColor:'pink'}}>
            <CardItem style={{backgroundColor:'red'}} header bordered>
              <Text style={{color:'white',fontSize:20}}>Student Info</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{backgroundColor:'pink',padding:9}}>
            
                <Text> Name : &nbsp;
                  {fname}
                </Text>

                <Text> Last Name : &nbsp;
                  {lname}
                </Text>
              
                <Text> Email Address : &nbsp;
                  {email}
                </Text>
                <Text> Phone No. : &nbsp;
                  {phoneno}
                </Text>
                <Text> Age : &nbsp;
                  {age}
                </Text>
                <Text> Gender : &nbsp;
                  {gender}
                </Text>
                <Text> Department : &nbsp;
                  {department}
                </Text>
                <Text> Batch : &nbsp;
                  {batch}
                </Text>
                <Text> CGPA : &nbsp;
                  {cgpa}
                </Text>
            
                <Text> Address : &nbsp;
                  {address}
                </Text>
                <Text> City : &nbsp;
                  {city}
                </Text>
              
              </Body>
            </CardItem>
            <CardItem  style={{backgroundColor:'pink'}} footer bordered>
              {/* <Text style={{color:'black',fontSize:16}}>{donate}
                  
              </Text> */}
            </CardItem>
          </Card>
        {/* </Content> */}
      {/* </Container> */}
      </ScrollView>
       
    )
}
const styles = StyleSheet.create({
        
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    }
})

export default StudentDetails