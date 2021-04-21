import './MainLayout.css';
import { ReactNode } from 'react';

const CLASS_NAME = 'MainLayout';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
    <div className={CLASS_NAME}>
        <header>
            
        </header>
        <main>
            {children}
        </main>
    </div>
);

export default MainLayout;