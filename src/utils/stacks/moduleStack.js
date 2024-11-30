import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import ModuleListScreen from "../../../src/components/screens/modules/ModuleListScreen";
import ModuleAddScreen from "../../../src/components/screens/modules/ModuleAddScreen";
import ModuleModifyScreen from "../../../src/components/screens/modules/ModuleModifyScreen";
import ModuleViewScreen from "../../../src/components/screens/modules/ModuleViewScreen";

const Stack = createNativeStackNavigator();

export const ModuleStack = () => {
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