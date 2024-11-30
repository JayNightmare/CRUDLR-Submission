import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "react-native";

import ModuleListScreen from "./src/components/screens/modules/ModuleListScreen";
import ModuleAddScreen from "./src/components/screens/modules/ModuleAddScreen";
import ModuleModifyScreen from "./src/components/screens/modules/ModuleModifyScreen";
import ModuleViewScreen from "./src/components/screens/modules/ModuleViewScreen";

import UserListScreen from "./src/components/screens/users/UserListScreen";
import UserAddScreen from "./src/components/screens/users/UserAddScreen";
import UserModifyScreen from "./src/components/screens/users/UserModifyScreen";
import UserViewScreen from "./src/components/screens/users/UserViewScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ModuleStack = () => {
    return (
        <>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <Stack.Navigator
                initialRouteName="ModuleListScreen"
                screenOptions={{
                    headerStyle: { backgroundColor: "#e1d8f7" },
                    headerTintColor: "black",
                    headerTitleStyle: { fontWeight: "bold" },
                    headerTitleAlign: "center",
                }}
            >
                <Stack.Screen
                    name="ModuleListScreen"
                    component={ModuleListScreen}
                    options={{ title: "Module List" }}
                />
                <Stack.Screen
                    name="ModuleAddScreen"
                    component={ModuleAddScreen}
                    options={{ title: "Add Module" }}
                />
                <Stack.Screen
                    name="ModuleModifyScreen"
                    component={ModuleModifyScreen}
                    options={{ title: "Modify Module" }}
                />
                <Stack.Screen
                    name="ModuleViewScreen"
                    component={ModuleViewScreen}
                    options={{ title: "View Module" }}
                />
            </Stack.Navigator>
        </>
    );
};

const UsersStack = () => {
    return (
        <>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <Stack.Navigator
                initialRouteName="UserListScreen"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#e1d8f7",
                        textshadow: "#000000"
                    },
                    headerTintColor: "black",
                    headerTitleStyle: { fontWeight: "bold" },
                    headerTitleAlign: "center",
                }}
            >

                <Stack.Screen
                    name="UserListScreen"
                    component={UserListScreen}
                    options={{ title: "User List" }}
                />
                <Stack.Screen
                    name="UserAddScreen"
                    component={UserAddScreen}
                    options={{ title: "Add User" }}
                />
                <Stack.Screen
                    name="UserModifyScreen"
                    component={UserModifyScreen}
                    options={{ title: "Modify User" }}
                />
                <Stack.Screen
                    name="UserViewScreen"
                    component={UserViewScreen}
                    options={{ title: "View User" }}
                />
            </Stack.Navigator>
       </>
    );
};

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
