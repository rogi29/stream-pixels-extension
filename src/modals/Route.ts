import { ReactNode } from "react";

export enum Routes {
    CHARACTER_CREATION,
    INVENTORY,
    PLAYER_STATS,
    LEADERBOARDS,
    DIVINE_BOUNTY
}

export interface Route {
    route: Routes;
    hide?: boolean;
    render: () => ReactNode;
}