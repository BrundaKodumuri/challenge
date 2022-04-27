import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProvincesComponent from "./components/Provinces/Provinces";
import CitiesComponent from "./components/Cities/Cities";
import BarangaysComponent from "./components/Barangays/Barangays";

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Screen name="Provinces" component={ProvincesComponent} />
      <Stack.Screen name="Cities" component={CitiesComponent} />
      <Stack.Screen name="Barangays" component={BarangaysComponent} />
    </NavigationContainer>
  );
}

export default App;
