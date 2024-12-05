import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FavouriteItem from "./FavouriteItem";

const FavouriteList = ({ data, type, onItemPress, onItemFavourite }) => {
    return (
        <View style={styles.container}>
            {data && data.length > 0 ? (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id || item.ModuleName || item.UserFirstname} // Adjust as needed
                    renderItem={({ item }) => (
                        <FavouriteItem
                            item={item}
                            type={type}
                            onSelect={onItemPress}
                            onFavourite={onItemFavourite}
                        />
                    )}
                />
            ) : (
                <Text style={styles.noText}>No {type === "Modules" ? "modules" : "users"} are favourited!</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
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
    noText: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        padding: 20,
    }
})

export default FavouriteList;
