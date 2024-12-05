import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icons from "../../UI/Icons";

const FavouriteItem = ({ item, type, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(item, type)} style={styles.item}>
            <Icons.FavouriteOutline />
            <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    itemText: {
        fontSize: 16,
        marginLeft: 10,
    },
});

export default FavouriteItem;
