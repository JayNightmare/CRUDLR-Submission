import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "react-native";
import { ModuleStack } from "./src/utils/stacks/moduleStack.js";
import { UsersStack } from "./src/utils/stacks/userStack.js";

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
                            backgroundColor: "#f2f2f2",
                            width: 250,
                        },
                        drawerLabelStyle: {
                            fontSize: 16,
                            fontWeight: "bold",
                        },
                        drawerActiveBackgroundColor: "#e1d8f7",
                        drawerActiveTintColor: "#000",
                        drawerInactiveTintColor: "#7d7d7d",
                        drawerItemStyle: {
                            borderRadius: 10,
                            marginVertical: 5,
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
