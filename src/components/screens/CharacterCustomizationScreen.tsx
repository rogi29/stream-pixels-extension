import './CharacterCustomizationScreen.css';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Equipment from "components/display/Equipment";
import Inventory from "components/display/Inventory";
import MainLayout from 'components/layouts/MainLayout';
import { ItemManagementProvider } from 'components/contexts/ItemManagementContext';

const CLASS_NAME = 'CharacterCustomizationScreen';

const CharacterCustomizationScreen = () => (
    <DndProvider backend={HTML5Backend}>
        <MainLayout>
            <ItemManagementProvider>
                <div className={CLASS_NAME}>
                    <div className={`${CLASS_NAME}__inventory`}>
                        <Inventory />
                    </div>
                    <div className={`${CLASS_NAME}__equipment`}>
                        <Equipment />
                    </div>
                </div>
            </ItemManagementProvider>
        </MainLayout>
    </DndProvider>
);

export default CharacterCustomizationScreen;