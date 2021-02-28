
import {connect} from "react-redux";
import * as React from 'react';
import auth from '@react-native-firebase/auth';
import { View,Button, ActivityIndicator,StyleSheet,Image, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';
import database from '@react-native-firebase/database';
function Profile(props){
    let val = props.route.params
    console.log("profile",val)

    let {students,companies} = props
return(
  <ScrollView>
<View style={{justifyContent:'center',alignItems:'center'}}>
{students.map((v,i)=>{
                            return v.email === val.email && <View key={v.email}>
                                <Text>
                                <Card style={{backgroundColor:'pink'}}>
            <CardItem style={{backgroundColor:'red'}} header bordered>
              <Text style={{color:'white',fontSize:20}}>Student Info</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{backgroundColor:'pink',padding:9}}>
            
                <Text> Name : &nbsp;
                  {v.fname}
                </Text>

                <Text> Last Name : &nbsp;
                  {v.lname}
                </Text>
              
                <Text> Email Address : &nbsp;
                  {v.email}
                </Text>
                <Text> Phone No. : &nbsp;
                  {v.phoneno}
                </Text>
                <Text> Age : &nbsp;
                  {v.age}
                </Text>
                <Text> Gender : &nbsp;
                  {v.gender}
                </Text>
                <Text> Department : &nbsp;
                  {v.department}
                </Text>
                <Text> Batch : &nbsp;
                  {v.batch}
                </Text>
                <Text> CGPA : &nbsp;
                  {v.cgpa}
                </Text>
            
                <Text> Address : &nbsp;
                  {v.address}
                </Text>
                <Text> City : &nbsp;
                  {v.city}
                </Text>
              
              </Body>
            </CardItem>
            <CardItem  style={{backgroundColor:'pink'}} footer bordered>
              {/* <Text style={{color:'black',fontSize:16}}>{donate}
                  
              </Text> */}
            </CardItem>
          </Card>
                                </Text>
                            </View>
                              
                        })}
                      


        {/* <Container style={{backgroundColor:'#CF2050'}}>
        
        <Content padder>
          <Card style={{backgroundColor:'pink'}}>
            <CardItem style={{backgroundColor:'red'}} header bordered>
              <Text style={{color:'white',fontSize:20}}>Your Profile</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{backgroundColor:'pink',padding:9}}>
             
                <Text>First Name : &nbsp;
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
                <Text> Gender : &nbsp;
                  {gender}
                </Text>
                <Text> Age : &nbsp;
                  {age}
                </Text>
                <Text> Blood Group : &nbsp;
                  {bgroup} 
                </Text> 
                <Text> Weight : &nbsp;
                    {weight}
                </Text>
                <Text>Location : &nbsp;
                  {location}
                </Text>
                <Text> City : &nbsp;
                  {city}
                </Text>
                <Text> Country : &nbsp;
                  {country}
                </Text>
              </Body>
            </CardItem>
            <CardItem  style={{backgroundColor:'pink'}} footer bordered>
            <Button color="red" onPress={logout} title='Log Out'>

            </Button>
            </CardItem>
          </Card>
        </Content>
      </Container> */}
   
</View>
  </ScrollView>


)
}
const mapStateToProps = (state)=>({
 
    students:state.students,
    // userDetails:state.userDetails,
    users:state.users
   
    
    
   
  })

  
  export default connect(mapStateToProps,null)(Profile);