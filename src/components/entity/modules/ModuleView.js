import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, Image, Alert } from "react-native";
import { Button, ButtonTray } from "../../UI/Button.js";
import Icons from "../../UI/Icons.js";
import Favourite from "../../UI/Favourite.js";

const ModuleView = ({ module, placeHolderText, onModify, onDelete, onFavourite }) => {
    const [isFavourite, setIsFavourite] = useState(module.ModuleFavourite);

    const handleDelete = () => onDelete(module);
    const handleFavourite = () => {
        onFavourite(module);
        setIsFavourite(!isFavourite);
    };

    useEffect(() => {
        setIsFavourite(module.ModuleFavourite);
    }, [module.ModuleFavourite]);

    const requestDelete = () => {
        Alert.alert(
            'Delete Module',
            `Are you sure you want to delete this\n${module.ModuleCode}: ${module.ModuleName}?`,
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', onPress: () => handleDelete(), color: 'red' },
            ],
            { cancelable: true }
        );
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{module.ModuleCode}</Text>
            <Text style={styles.subtitle}>{module.ModuleName}</Text>
            <Image style={styles.image} source={{ uri: module.ModuleImageURL }} />
            <Text style={styles.detail}>Level: {module.ModuleLevel}</Text>
            <Text style={styles.detail}>Cohort: {module.ModuleYearName}</Text>
            <Text style={styles.detail}>Module Leader: {module.ModuleLeaderName}</Text>

            <ButtonTray>
                <Favourite 
                    isFavourite={isFavourite} 
                    onSelect={handleFavourite} 
                    style={styles.favourite}
                />
                <Button 
                    onPress={onModify} 
                    icon={<Icons.Edit size={20}/>} 
                    label='Modify' 
                />
                <Button 
                    onPress={requestDelete} 
                    icon={<Icons.Delete />} 
                    label='Delete' 
                    styleLabel={{ color: 'red' }} 
                    styleButton={{ borderColor: 'red' }} 
                />
            </ButtonTray>

            <Text style={styles.descrip}>{placeHolderText}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'black'
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'black'
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
    favourite: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'grey',
    }
});

export default ModuleView;