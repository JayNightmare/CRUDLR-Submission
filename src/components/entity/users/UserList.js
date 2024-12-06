import React from "react";
import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import UserItem from "./UserItem.js";

const UserList = ({ users, onSelect, isLoading, onFavourite }) => {
    return (
        <ScrollView style={styles.container}>
            { isLoading ? <ActivityIndicator size="large" color="#000" /> : null }
            { users.reverse().map((user) => {
                return <UserItem key={user.UserID} user={user} onSelect={onSelect} onFavourite={onFavourite}/>
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