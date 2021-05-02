import { Routes } from 'modals/Route';
import CharacterCustomizationScreen from 'components/screens/CharacterCustomizationScreen';
import MainLayout from 'components/layouts/MainLayout';

export default [
    {
        hide: true,
        route: Routes.CHARACTER_CREATION,
        render: () => <MainLayout><span>CHARACTER CREATION</span></MainLayout>
    },
    {
        route: Routes.INVENTORY,
        render: () => <CharacterCustomizationScreen />
    },
    {
        route: Routes.PLAYER_STATS,
        render: () => <MainLayout><span>PLAYER STATS</span></MainLayout>
    },
    {
        route: Routes.LEADERBOARDS,
        render: () => <MainLayout><span>LEADERBOARDS</span></MainLayout>
    },
    {
        route: Routes.DIVINE_BOUNTY,
        render: () => <MainLayout><span>DIVINE BOUNTY</span></MainLayout>
    }
];