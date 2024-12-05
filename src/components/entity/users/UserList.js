import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import UserItem from "./UserItem.js";
import { useStore } from "../../Store/UseStore.js";

const UserList = ({ users, onSelect, isLoading, onFavourite }) => {
    const [favourites] = useStore("userFavourites", []);
    const [augmentedUsers, setAugmentedUsers] = useState(users);

    useEffect(() => {
        const updatedUsers = users.map(user => ({
            ...user,
            UserFavourite: favourites.includes(user.UserID)
        }));
        setAugmentedUsers(updatedUsers);
    }, [users, favourites]);

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            { isLoading ? <ActivityIndicator size="large" color="#000" /> : null }
            { [...augmentedUsers].reverse().map((user) => {
                return <UserItem 
                    key={user.UserID} 
                    user={user} 
                    onSelect={onSelect} 
                    onFavourite={onFavourite}
                />
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    contentContainer: {
        flexDirection: 'column-reverse',
    }
});

export default UserList;