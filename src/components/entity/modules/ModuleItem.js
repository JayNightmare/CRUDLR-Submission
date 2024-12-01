import { StyleSheet, View, Text } from "react-native";
import Selector from "../../UI/Selector";
import Favourite from "../../UI/Favourite";

const ModuleItem = ({ module, onSelect, onFavourite }) => {
    const handleSelect = () => onSelect(module);;
    const handleFavourite = () => onFavourite(module);;

    return (
        <View style={styles.cardContainer}>
            <View style={styles.row}>
                <Selector onPress={handleSelect} pressedStyle={styles.pressedItem}  style={styles.textContainer}>
                    <Favourite isFavourite={module.ModuleFavourite} onSelect={handleFavourite}></Favourite>
                    <Text style={styles.moduleNameText}>
                        <Text style={{ fontWeight: "bold" }}>{module.ModuleCode}</Text> | {module.ModuleName}
                    </Text>
                </Selector>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 10,
        marginBottom: 10, // Add a margin below the card
        paddingHorizontal: 10,
        paddingVertical: 12,
        
        backgroundColor: "#e8e8e8",

        elevation: 2,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,

        borderRadius: 8,
        borderColor: "#cccc", // Add a bottom border
        borderWidth: 1,
    },

    row: {
        flexDirection: "row", // Align items horizontally
        justifyContent: "space-between", // Space between the text and delete button
        alignItems: "center", // Center items vertically
    },

    overView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },

    textContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },

    moduleNameText: {
        fontSize: 18,
        color: "#333",
    },

    removeButton: {
        padding: 5,
    },

    pressedItem: {
        transform: [{ scale: 0.95 }],
        opacity: 0.8,
    }
});

export default ModuleItem;
