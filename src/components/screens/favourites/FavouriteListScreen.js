import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useStore } from "../../Store/UseStore";
import useLoad from "../../API/useLoad.js";
import Screen from "../../layout/Screen";
import { ButtonTray, Button } from "../../UI/Button";
import FavouriteList from "../../entity/favourites/FavouriteList";
import { modulesEndpoint, usersEndpoint } from "../../../utils/shared/endpoints.js";

const FavouriteListScreen = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState("Modules");
    const [favouriteModules] = useStore("moduleFavourites", []);
    const [favouriteUsers] = useStore("userFavourites", []);
    const [filteredModules, setFilteredModules] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [modules] = useLoad(modulesEndpoint);
    const [users] = useLoad(usersEndpoint);

    useEffect(() => {
        const fetchFavourites = () => {
            // Filter modules
            if (modules.length > 0) {
                const filtered = modules.filter((module) =>
                    favouriteModules.includes(module.ModuleID)
                );
                setFilteredModules(filtered);
                console.log(`Filtered modules: ${filtered.length}`);
            }

            // Filter users
            if (users.length > 0) {
                const filtered = users.filter((user) =>
                    favouriteUsers.includes(user.UserID)
                );
                setFilteredUsers(filtered);
                console.log(`Filtered users: ${filtered.length}`);
            }
        };

        fetchFavourites();
    }, [favouriteModules, favouriteUsers, modules, users]);

    const handleTabChange = (tab) => setSelectedTab(tab);

    const handleItemPress = (item, type) => {
        if (type === "Modules") {
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
                data={selectedTab === "Modules" ? filteredModules : filteredUsers}
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
