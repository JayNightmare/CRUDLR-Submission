import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

const Icons = {};

const Add = ({ size }) => <Ionicons name="add" size={size}  />;
const Edit = ({ size }) => <Feather name="edit-2" size={size} />;
const Delete = () => <Ionicons name="trash" size={20} color='red' />;
const Close = () => <Ionicons name="close" size={20} color='red' />;
const Loading = () => <Ionicons name="loading" size={20} />
const Tick = ({ size }) => <Ionicons name="checkmark-circle" size={size}></Ionicons>
const FavouriteOutline = () => <Ionicons name="heart-outline" size={20} color='grey' />;
const FavouriteFilledIn = () => <Ionicons name="heart" size={20} color='crimson' />;

Icons.Add = Add;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Close = Close;
Icons.Loading = Loading;
Icons.Tick = Tick;
Icons.FavouriteOutline = FavouriteOutline
Icons.FavouriteFilledIn = FavouriteFilledIn


export default Icons;