import './CharacterCustomizationScreen.css';
import EquippedItemsContainer from "components/containers/EquippedItemsContainer";
import ItemsContainer from "components/containers/ItemsContainer";
import Equipment from "components/display/Equipment";
import Inventory from "components/display/Inventory";

const CLASS_NAME = 'CharacterCustomizationScreen';

const CharacterCustomizationScreen = () => {
    return (
        <div className={CLASS_NAME}>
            <div className={`${CLASS_NAME}__inventory`}>
                <ItemsContainer children={Inventory} />
            </div>
            <div className={`${CLASS_NAME}__equipment`}>
                <EquippedItemsContainer children={Equipment} />
            </div>
        </div>
    );
};

export default CharacterCustomizationScreen;