import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "react-native";
import {ModuleStack} from "./src/utils/stacks/moduleStack.js";
import {UsersStack} from "./src/utils/stacks/userStack.js";

const Drawer = createDrawerNavigator();

export const App = () => {
    return (
        <>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <NavigationContainer>
                <Drawer.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: "#d7c8f3" },
                        headerTintColor: "black",
                        headerTitleStyle: { fontWeight: "bold" },
                        headerTitleAlign: "center",
                        drawerStyle: {
                            backgroundColor: "#f2f2f2", // Set the background color of the drawer
                            width: 250, // Set the width of the drawer
                        },
                        drawerLabelStyle: {
                            fontSize: 16, // Change font size of the labels
                            fontWeight: "bold", // Make labels bold
                        },
                        drawerActiveBackgroundColor: "#e1d8f7", // Background color for active item
                        drawerActiveTintColor: "#000", // Text color for active item
                        drawerInactiveTintColor: "#7d7d7d", // Text color for inactive items
                        drawerItemStyle: {
                            borderRadius: 10, // Rounded corners for items
                            marginVertical: 5, // Spacing between items
                        },
                    }}
                >
                    <Drawer.Screen
                        name="ModuleStack"
                        component={ ModuleStack }
                        options={{ title: "Modules" }}
                    />
                    <Drawer.Screen
                        name="UsersStack"
                        component={ UsersStack }
                        options={{ title: "Users" }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App;
