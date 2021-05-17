import { Routes } from 'modals/Route';
import MainLayout from 'components/layouts/MainLayout';
import CharacterCustomizationScreen from 'components/screens/CharacterCustomizationScreen';
import DivineBountyScreen from 'components/screens/DivineBountyScreen';
import StreamScreen from 'components/screens/StreamScreen';

export default [
    {
        route: Routes.STREAM,
        render: () => <StreamScreen />
    },
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
        render: () => <DivineBountyScreen />
    }
];