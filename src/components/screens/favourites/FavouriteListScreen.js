import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useStore } from "../../Store/UseStore";
import Screen from "../../layout/Screen";
import { ButtonTray, Button } from "../../UI/Button";
import FavouriteList from "../../entity/favourites/FavouriteList";
import API from "../../API/API.js";
import { modulesEndpoint, usersEndpoint } from "../../../utils/shared/endpoints.js";

const FavouriteListScreen = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState("Modules");
    const [favouriteModules] = useStore("moduleFavourites", []);
    const [favouriteUsers] = useStore("userFavourites", []);
    const [modules, setModules] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchFavouriteModules = async () => {
            const fullModules = await API.get(modulesEndpoint);

            // console.log("Full Modules Response:", fullModules);
            // console.log("Favourited Modules:", favouriteModules);

            const filteredModules = fullModules.filter(module => favouriteModules.includes(module.ModuleID));
            console.log("Filtered Modules:", filteredModules);
            return setModules(filteredModules);
        };

        const fetchFavouriteUsers = async () => {
            const fullUsers = await API.get(usersEndpoint);
            const filteredUsers = fullUsers.filter((user) =>
                favouriteUsers.includes(user.UserID)
            );
            return setUsers(filteredUsers);
        };

        if (favouriteModules.length > 0) fetchFavouriteModules();
        if (favouriteUsers.length > 0) fetchFavouriteUsers();
    }, [favouriteModules, favouriteUsers]);

    const handleTabChange = (tab) => setSelectedTab(tab);

    const handleItemPress = (item, type) => {
        if (type === "module") {
            navigation.navigate("ModuleViewScreen", { module: item });
        } else {
            navigation.navigate("UserViewScreen", { user: item });
        }
    };

    return (
        <Screen>
            <ButtonTray>
                <Button
                    styleButton={selectedTab === "Modules" ? styles.activeButton : styles.inactiveButton}
                    label="Modules"
                    onPress={() => handleTabChange("Modules")}
                />
                <Button
                    styleButton={selectedTab === "Users" ? styles.activeButton : styles.inactiveButton}
                    label="Users"
                    onPress={() => handleTabChange("Users")}
                />
            </ButtonTray>
            <FavouriteList
                data={selectedTab === "Modules" ? modules : users}
                type={selectedTab}
                onItemPress={handleItemPress}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    activeButton: {
        borderBottomWidth: 0,
        borderWidth: 1,
        borderBottomColor: "#6200EE",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    inactiveButton: {
        borderWidth: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomColor: "#ccc",
    },
});

export default FavouriteListScreen;
