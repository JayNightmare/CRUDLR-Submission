import { StyleSheet, View, Text } from "react-native";
import Selector from "../../UI/Selector";
import Favourite from "../../UI/Favourite";

// Split K Number from UserEmail
const splitKNumber = (userEmail) => {
    const splitEmail = userEmail.split('@');
    const kNumber = splitEmail[0];
    return kNumber;
};

const UserItem = ({ user, onSelect, onFavourite }) => {
    const handleSelect = () => onSelect(user);
    const handleFavourite = () => onFavourite(user);

    return (
        <View style={styles.cardContainer}>
            <View style={styles.row}>
                <Selector onPress={handleSelect} pressedStyle={styles.pressedItem} style={styles.textContainer}>
                    <Favourite isFavourite={user.UserFavourite} onSelect={handleFavourite}></Favourite>
                    <Text style={styles.userNameText}>
                        <Text style={{ fontWeight: "bold" }}>{splitKNumber(user.UserEmail)}</Text> | {user.UserFirstname} {user.UserLastname}
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
        shadowColor: "#000",
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

    userNameText: {
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

export default UserItem;
