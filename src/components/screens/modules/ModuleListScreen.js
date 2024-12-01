import React, { useEffect } from "react";
import { StatusBar, LogBox, ActivityIndicator, View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import API from "../../API/API.js";
import Screen from "../../layout/Screen.js"; 
import ModuleList from "../../entity/modules/ModuleList.js";
import { ButtonTray, Button  } from "../../UI/Button.js";
import Icons from "../../UI/Icons.js";
import useLoad from "../../API/useLoad.js";
import { useStore } from "../../Store/UseStore.js";

const ModuleListScreen = () => {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    const modulesEndpoint = 'https://softwarehub.uk/unibase/api/modules';
    const favouritesKey = "moduleFavourites";
    const loggedInUserKey = 'Jay';

    const navigation = useNavigation();

    const [ modules, isLoading, setModules, loadModules ] = useLoad(modulesEndpoint);
    const [loggedInUser] = useStore(loggedInUserKey, null);
    const [favourites, saveFavourites] = useStore(favouritesKey, []);

    const augmentModuleWithFavourites = () => {
        const modifyModules = (module) => ({
            ...module,
            ModuleFavourite: favourites.includes(module.ModuleID)
        });
        const augmentedModules = modules.map(modifyModules);
        augmentedModules.length > 0 && setModules(augmentedModules);
    }

    useEffect(() => {
        augmentModuleWithFavourites();
    }, [isLoading]);

    const handleFavourites = (module) => {
        const isFavourites = !module.ModuleFavourite;
        const updateModule = (item) => item.ModuleID === module.ModuleID ? { ...item, ModuleFavourite: isFavourites } : item;
        const updatedModules = modules.map(updateModule);
        setModules(updatedModules);

        const updatedFavouritesList = updatedFavouritesList.filter((item) => item.ModuleFavourite).map((item) => item.ModuleID);
        saveFavourites(updatedFavouritesList);
    }
    
    const onDelete = async (module) => {
        const deleteEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
        const result = await API.delete(deleteEndpoint, module);
        console.log(result);
        if (result.isSuccess) {
            loadModules(modulesEndpoint);
            navigation.navigate('ModuleListScreen');
        } else { Alert.alert(result.message); }
    };

    const onAdd = async (module) => {
        const result = await API.post(modulesEndpoint, module);
        console.log(result);
        if (result.isSuccess) {
            loadModules(modulesEndpoint);
            navigation.goBack();
        } else { Alert.alert(result.message); }
    };

    const onModify = async (module) => {
        const putEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
        const result = await API.put(putEndpoint, module);
        if (result.isSuccess) {
            loadModules(modulesEndpoint);
            navigation.goBack();
            navigation.goBack();
        } else { Alert.alert(result.message); }
    }

    const gotoViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete, onModify });
    const gotoAddScreen = () => { navigation.navigate('ModuleAddScreen', { onAdd }); };

    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <Text>{favourites.map((favourite => `${favourite},`))}</Text>
            {loggedInUser && (
                <Text>Welcome! {loggedInUser.UserFirstname}</Text>
            )}
            <ButtonTray>
                <Button styleButton={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottomWidth: 1, borderWidth: 0 }} icon={<Icons.Add size={20}/>} label="Add" onPress={gotoAddScreen} />
            </ButtonTray>
            {isLoading && (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Loading Information...</Text>
                    <ActivityIndicator size='64' color="#0000ff" />
                </View>
            )}
            <ModuleList modules={modules} onSelect={gotoViewScreen} isLoading={isLoading} onFavourite={handleFavourites} />
        </Screen>
    );
};

export default ModuleListScreen;