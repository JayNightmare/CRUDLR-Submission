import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Selector from "../../UI/Selector";
import Favourite from "../../UI/Favourite";

const FavouriteItem = ({ item, type, onSelect, onFavourite }) => {
    const handleSelect = () => onSelect(item, type);
    const handleFavourite = () => onFavourite(item, type);

    // Split K Number from UserEmail
    const splitKNumber = (userEmail) => {
        const splitEmail = userEmail.split('@');
        const kNumber = splitEmail[0];
        return kNumber;
    };

    const isFavourite = true;

    return (
        <View style={styles.cardContainer}>
            <View style={styles.row}>
                <Selector onPress={handleSelect} pressedStyle={styles.pressedItem} style={styles.textContainer}>
                    <Favourite isFavourite={isFavourite} onSelect={handleFavourite} />
                    <Text style={styles.itemNameText}>
                        <Text style={{ fontWeight: "bold" }}>
                            {type === "Modules" ? item.ModuleCode : splitKNumber(item.UserEmail)}
                        </Text>
                        {type === "Modules" && ` | ${item.ModuleName}`}
                        {type === "Users" && <Text> | {item.UserFirstname} {item.UserLastname}</Text>}
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
