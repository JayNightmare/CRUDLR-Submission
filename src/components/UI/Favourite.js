import { Text } from "react-native";
import Selector from "./Selector";
import Icons from "./Icons";

const Favourite = ({ isFavourite, onSelect, style }) => {
    return (
        <Selector onPress={onSelect} style={style}>
            <Text>{isFavourite ? <Icons.FavouriteFilledIn /> : <Icons.FavouriteOutline />}</Text>
        </Selector>
    );
}

export default Favourite;