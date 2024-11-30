import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import UserListScreen from "../../../src/components/screens/users/UserListScreen";
import UserAddScreen from "../../../src/components/screens/users/UserAddScreen";
import UserModifyScreen from "../../../src/components/screens/users/UserModifyScreen";
import UserViewScreen from "../../../src/components/screens/users/UserViewScreen";

const Stack = createNativeStackNavigator();

export const UsersStack = () => {
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