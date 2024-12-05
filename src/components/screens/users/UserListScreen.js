import React, { useEffect } from "react";
import { StatusBar, LogBox, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import API from "../../API/API.js";
import Screen from "../../layout/Screen.js"; 
import UserList from "../../entity/users/UserList.js";
import { ButtonTray, Button  } from "../../UI/Button.js";
import Icons from "../../UI/Icons.js";
import useLoad from "../../API/useLoad.js";
import { useStore } from "../../Store/UseStore.js";
import { usersEndpoint } from "../../../utils/shared/endpoints.js";

const UserListScreen = () => {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    const favouritesKey = "userFavourites";
    // const loggedInUserKey = 'Jay';

    const navigation = useNavigation();

    const [ users, isLoading, setUsers, loadUsers ] = useLoad(usersEndpoint);
    // const [loggedInUser] = useStore(loggedInUserKey, null);
    const [favourites, saveFavourites] = useStore(favouritesKey, []);

    const augmentUserWithFavourites = () => {
        const modifyUsers = (user) => ({
            ...user,
            UserFavourite: favourites.includes(user.UserID)
        });
        const augmentedUsers = users.map(modifyUsers);
        augmentedUsers.length > 0 && setUsers(augmentedUsers);
    }

    useEffect(() => {
        if (!isLoading) augmentUserWithFavourites();
    }, [isLoading, favourites]);

    const handleFavourite = (user) => {
        const isFavourite = !user.UserFavourite;
        const updateUser = (item) => item.UserID === user.UserID ? { ...item, UserFavourite: isFavourite } : item;
        const updatedUserList = users.map(updateUser);
        setUsers(updatedUserList);

        const updatedFavouritesList = updatedUserList.filter((item) => item.UserFavourite).map((item) => item.UserID);
        saveFavourites(updatedFavouritesList);
    }
    
    const onDelete = async (user) => {
        const deleteEndpoint = `${usersEndpoint}/${user.UserID}`;
        const result = await API.delete(deleteEndpoint, user);
        if (result.isSuccess) {
            loadUsers(usersEndpoint);
            navigation.navigate('UserListScreen');
        } else { Alert.alert(result.message); }
    };

    const onAdd = async (user) => {
        const result = await API.post(usersEndpoint, user);
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

    const gotoViewScreen = (user) => navigation.navigate('UserViewScreen', { user, onDelete, onModify, onFavourite: handleFavourite });
    const gotoAddScreen = () => { navigation.navigate('UserAddScreen', { onAdd }); };
    const gotoFavourites = () => navigation.navigate('FavouriteListScreen', { modules, onFavourite: handleFavourite, favouritesKey });

    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <ButtonTray>
                <Button styleButton={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottomWidth: 1, borderWidth: 0 }} icon={<Icons.Add size={20}/>} label="Add" onPress={gotoAddScreen} />
                <Button styleButton={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottomWidth: 1, borderWidth: 0 }} icon={<Icons.FavouriteOutline size={20}/>} label="Favourites" onPress={gotoFavourites} />
            </ButtonTray>
            <UserList users={users} onSelect={gotoViewScreen} isLoading={isLoading} onFavourite={handleFavourite} />
        </Screen>
    );
};

export default UserListScreen;