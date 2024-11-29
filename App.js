import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './pages/MapScreen';
import HospitalDetails from './pages/HospitalDetails';

const Stack = createStackNavigator();

export default function App() {
  const [hosp,setInfo]=useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MapScreen"
          
          options={{ headerShown: false }}>
          {()=> <MapScreen info={setInfo}/>}
          </Stack.Screen>
        <Stack.Screen
          name="HospitalDetails"
          
          options={{ title: 'Detalhes do Hospital' }}>
          {()=> <HospitalDetails hospital={hosp}/>}
          </Stack.Screen>
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}
