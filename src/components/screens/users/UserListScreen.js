import React from "react";
import { StatusBar, LogBox, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import API from "../../API/API.js";
import Screen from "../../layout/Screen.js"; 
import UserList from "../../entity/users/UserList.js";
import { ButtonTray, Button  } from "../../UI/Button.js";
import Icons from "../../UI/Icons.js";
import useLoad from "../../API/useLoad.js";
import { usersEndpoint } from "../../../utils/shared/endpoints.js";

const UserListScreen = () => {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    const navigation = useNavigation();

    const [ users, isLoading, , loadUsers ] = useLoad(usersEndpoint); 
    
    const onDelete = async (user) => {
        const deleteEndpoint = `${usersEndpoint}/${user.UserID}`;
        const result = await API.delete(deleteEndpoint, user);
        console.log(result);
        if (result.isSuccess) {
            loadUsers(usersEndpoint);
            navigation.navigate('UserListScreen');
        } else { Alert.alert(result.message); }
    };

    const onAdd = async (user) => {
        const result = await API.post(usersEndpoint, user);
        console.log(result);
        if (result.isSuccess) {
            loadUsers(usersEndpoint);
            navigation.goBack();
        } else { Alert.alert(result.message); }
    };

    const onModify = async (user) => {
        const putEndpoint = `${usersEndpoint}/${user.UserID}`;
        const result = await API.put(putEndpoint, user);
        if (result.isSuccess) {
            loadUsers(usersEndpoint);
            navigation.goBack();
            navigation.goBack();
        } else { Alert.alert(result.message); }
    }

    const gotoViewScreen = (user) => navigation.navigate('UserViewScreen', { user, onDelete, onModify });

    const gotoAddScreen = () => { navigation.navigate('UserAddScreen', { onAdd }); };

    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <ButtonTray>
                <Button styleButton={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottomWidth: 1, borderWidth: 0 }} icon={<Icons.Add size={20}/>} label="Add" onPress={gotoAddScreen} />
            </ButtonTray>
            <UserList users={users} onSelect={gotoViewScreen} isLoading={isLoading} />
        </Screen>
    );
};

export default UserListScreen;