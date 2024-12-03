import { StyleSheet, Text, ScrollView, Image, Alert, View } from "react-native";
import { Button, ButtonTray } from "../../UI/Button.js";
import Icons from "../../UI/Icons.js";
import Favourite from "../../UI/Favourite.js";

const UserView = ({ user, placeHolderText, onModify, onDelete, onFavourite }) => {
    const handleDelete = () => onDelete(user);
    const handleFavourite = () => onFavourite(user);

    const requestDelete = () => {
        Alert.alert(
            'Delete User',
            `Are you sure you want to delete this\n${user.UserID}: ${user.UserName}?`,
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', onPress: () => handleDelete(), color: 'red' },
            ],
            { cancelable: true }
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.title}>
                    {user.UserFirstname} {user.UserLastname} {user.UserRegistered ? (
                    <Icons.Tick size={20} style={styles.checkIcon} />
                ) : null}
                </Text>
            </View>
            <Text style={styles.subtitle}> {user.UserEmail}</Text>
            {user.UserImageURL ? <Image style={styles.image} source={{ uri: user.UserImageURL }} /> : null}
            {user.UserLevel ? <Text style={styles.detail}>Level: {user.UserLevel}</Text> : null}
            {user.UserYearName ? <Text style={styles.detail}>Cohort: {user.UserYearName}</Text> : null}
            {user.UserUsertypeName ? <Text style={styles.detail}>Type: {user.UserUsertypeName}</Text> : null}

            <ButtonTray>
                {/* favourite button */}
                <Favourite isFavourite={user.UserFavourite} onSelect={handleFavourite} style={styles.favourite}></Favourite>
                <Button onPress={onModify} icon={<Icons.Edit size={20}/>} label='Modify' />
                <Button onPress={requestDelete} icon={<Icons.Delete />} label='Delete' styleLabel={{ color: 'red' }} styleButton={{ borderColor: 'red' }} />
            </ButtonTray>

            <Text style={styles.descrip} >{placeHolderText}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    nameContainer: {
        flex: 1,
        alignContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'black',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#a2a2a2'
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
        color: 'black'
    },
    detail: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black'
    },
    descrip: {
        borderTopWidth: 1,
        borderTopColor: 'gray',
        marginTop: 10,
        marginBottom: 20,
        lineHeight: 24,
        color: 'black'
    },
    pressableView: {
        marginVertical: 20
    },
    favourite: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'grey',
    },
    modifyButton: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'black',
    },
    modifyButtonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    deleteButton: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'red',
    },
    deleteButtonText: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    }
});

export default UserView;