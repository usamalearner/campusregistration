import * as React from 'react';

import { View, ImageBackground } from 'react-native';
import {Text, Body, H1} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

function About(){
return(
<ImageBackground
          
          style={{width:'100%',height:'100%',backgroundColor:'white'}}
        //   source={require('../assets/pic1.png')}
          resizeMode='cover'
          >

<View style={{margin:15}}>
    <ScrollView>
    <Text style={{fontSize:20,textAlign:'justify'}}>
        <H1>
        Blood Types:
        </H1>
        {'\n'}
        {'\n'}
  <Text>
  Although all blood is made of the same basic elements, not all blood is alike. Infect, there are
eight different common blood types, which are determined by the presence or absence of certain
antigens–substances that can trigger an immune response if they are foreign to the body. Since
some antigens can trigger patient’s immune system to attack the transfused blood, safe blood
transfusions depend on careful blood typing and cross-matching. There are four major blood
groups determined by the presence or absence of two antigens–A and B–on the surface of red
blood cells:
      </Text> 
<Text style={{fontSize:16}}>
{'\n'}
{'\n'}
Group A – has only the A antigen on red cells (and B antibody in the plasma)

{'\n'}{'\n'}
Group B – has only the B antigen on red cells (and A antibody in the plasma)
{'\n'}{'\n'}
Group AB – has both A and B antigens on red cells (but neither A nor B antibody in the plasma)
{'\n'}{'\n'}
Group O – has neither A nor B antigens on red cells (but both A and B antibody are in the plasma)
{'\n'}{'\n'}

There are very specific ways in which blood types must be matched for a safe transfusion.
{'\n'}{'\n'}
</Text>

<Text>

In addition to the A and B antigens, there is a third antigen called the Rh factor, which can be
either present (+) or absent ( – ). In general, Rh negative blood is given to Rh-negative patients,
and Rh positive blood or Rh negative blood may be given to Rh positive patients.

The universal red cell donor has Type O negative blood type. The universal plasma donor has
Type AB blood type.

</Text>

    </Text>
    </ScrollView>
   
</View>

              </ImageBackground>
)
}
export default About