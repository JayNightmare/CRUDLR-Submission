import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Selector from "../../UI/Selector"; // Assuming Selector exists in your UI folder
import Favourite from "../../UI/Favourite"; // Assuming Favourite exists in your UI folder

const FavouriteItem = ({ item, type, onSelect, onFavourite }) => {
    const handleSelect = () => onSelect(item, type);
    const handleFavourite = () => onFavourite(item, type);

    return (
        <View style={styles.cardContainer}>
            <View style={styles.row}>
                <Selector onPress={handleSelect} pressedStyle={styles.pressedItem} style={styles.textContainer}>
                    <Favourite isFavourite={item.isFavourite} onSelect={handleFavourite}></Favourite>
                    <Text style={styles.itemNameText}>
                        <Text style={{ fontWeight: "bold" }}>{type === "module" ? item.ModuleCode : item.UserName}</Text>
                        {type === "module" && ` | ${item.ModuleName}`}
                    </Text>
                </Selector>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: "#e8e8e8",
        elevation: 2,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        borderRadius: 8,
        borderColor: "#cccc",
        borderWidth: 1,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    itemNameText: {
        fontSize: 18,
        color: "#333",
    },
    pressedItem: {
        transform: [{ scale: 0.95 }],
        opacity: 0.8,
    },
});

export default FavouriteItem;
