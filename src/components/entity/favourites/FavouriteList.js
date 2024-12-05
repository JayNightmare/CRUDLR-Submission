import React from "react";
import { FlatList, StyleSheet } from "react-native";
import FavouriteItem from "./FavouriteItem";

const FavouriteList = ({ data, type, onItemPress, onItemFavourite }) => {
    return (
        <FlatList
            style={styles.container}
            data={data}
            keyExtractor={(item) => item.id || item.ModuleCode || item.UserName} // Adjust as needed
            renderItem={({ item }) => (
                <FavouriteItem
                    item={item}
                    type={type}
                    onSelect={onItemPress}
                    onFavourite={onItemFavourite}
                />
            )}
        />
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
    }
})

export default FavouriteList;
