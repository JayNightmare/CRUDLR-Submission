import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useStore } from "../../Store/UseStore";
import Screen from "../../layout/Screen";
import { ButtonTray, Button } from "../../UI/Button";
import FavouriteList from "../../entity/favourites/FavouriteList";

const FavouriteListScreen = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState("Modules"); // "Modules" or "Users"
    const [favouriteModules] = useStore("moduleFavourites", []);
    const [favouriteUsers] = useStore("userFavourites", []);
    const [modules, setModules] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setModules(favouriteModules);
        setUsers(favouriteUsers);
    }, [favouriteModules, favouriteUsers]);

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

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
        borderBottomWidth: 2,
        borderBottomColor: "#6200EE",
    },
    inactiveButton: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});

export default FavouriteListScreen;
