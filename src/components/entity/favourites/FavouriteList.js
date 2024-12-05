import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import FavouriteItem from "./FavouriteItem";

const FavouriteList = ({ data, type, onItemPress }) => {
    if (!data || data.length === 0) {
        return <Text style={styles.emptyText}>No favourites in {type}.</Text>;
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
                <FavouriteItem item={item} type={type} onPress={onItemPress} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    emptyText: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 16,
        color: "#aaa",
    },
});

export default FavouriteList;
