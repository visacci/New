import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplahScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNav from "../../navigation/BottomTabNav";
import { Cart } from "../../screens/Cart";
import { Provider } from "react-redux";
import { store } from "../../Redux/Store";
const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("../../assets/fonts/Poppins-Regular.ttf"),
    light: require("../../assets/fonts/Poppins-Light.ttf"),
    bold: require("../../assets/fonts/Poppins-Bold.ttf"),
    medium: require("../../assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplahScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Provider>
  );
}
