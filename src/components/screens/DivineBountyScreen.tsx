import './DivineBountyScreen.css';

import MainLayout from 'components/layouts/MainLayout';
import Card from 'components/core/Card';
import Grid from 'components/layouts/Grid';
import Cell from 'components/layouts/Cell';
import CardButton from 'components/core/CardButton';

const CLASS_NAME = 'DivineBountyScreen';

const DivineBountyScreen = () => (
    <MainLayout>
        <div className={CLASS_NAME}>
            <Grid rows={2} columns={4} gap="30px" rowsHeight="175px" style={{ maxWidth: '1100px' }}>
                <Cell rowSpan={1}>
                    <Card
                        heading="Daily"
                        imgSrc="https://opengameart.org/sites/default/files/Treasure%20Chest%20closed%20254x254.png"
                        imgAlt="Daily"
                        children={(
                            <CardButton variant="primary">CLAIM</CardButton>
                        )}
                    />
                </Cell>
                <Cell rowSpan={2}>
                    <Card
                        heading="Tier #1"
                        imgSrc="https://opengameart.org/sites/default/files/Treasure%20Chest%20closed%20254x254.png"
                        imgAlt="Tier #2"
                        imgColor="#2E4B77"
                        children={(
                            <>
                                <CardButton variant="primary">CLAIM</CardButton>
                                <CardButton variant="secondary">
                                    <span style={{ float: 'left' }}>Bits</span>
                                    <span style={{ float: 'right' }}>50</span>
                                </CardButton>
                                <CardButton>
                                    <span style={{ float: 'left' }}>Tokens</span>
                                    <span style={{ float: 'right' }}>2000</span>
                                </CardButton>
                            </>
                        )}
                    />
                </Cell>
                <Cell rowSpan={2}>
                    <Card
                        heading="Tier #2"
                        imgSrc="https://opengameart.org/sites/default/files/Treasure%20Chest%20closed%20254x254.png"
                        imgAlt="Tier #2"
                        imgColor="#281757"
                        children={(
                            <>
                                <CardButton variant="primary">CLAIM</CardButton>
                                <CardButton variant="secondary">
                                    <span style={{ float: 'left' }}>Bits</span>
                                    <span style={{ float: 'right' }}>150</span>
                                </CardButton>
                                <CardButton>
                                    <span style={{ float: 'left' }}>Tokens</span>
                                    <span style={{ float: 'right' }}>5000</span>
                                </CardButton>
                            </>
                        )}
                    />
                </Cell>
                <Cell rowSpan={2}>
                    <Card
                        heading="Tier #3"
                        imgSrc="https://opengameart.org/sites/default/files/Treasure%20Chest%20closed%20254x254.png"
                        imgAlt="Tier #3"
                        imgColor="#EABA13"
                        children={(
                            <>
                                <CardButton variant="primary">CLAIM</CardButton>
                                <CardButton variant="secondary">
                                    <span style={{ float: 'left' }}>Bits</span>
                                    <span style={{ float: 'right' }}>300</span>
                                </CardButton>
                                <CardButton>
                                    <span style={{ float: 'left' }}>Tokens</span>
                                    <span style={{ float: 'right' }}>7500</span>
                                </CardButton>
                            </>
                        )}
                    />
                </Cell>
                <Cell rowSpan={1}>
                    <Card
                        heading="Weekly"
                        imgSrc="https://opengameart.org/sites/default/files/Treasure%20Chest%20closed%20254x254.png"
                        imgAlt="Weekly"
                        children={(
                            <CardButton variant="disabled">8h 13m left</CardButton>
                        )}
                    />
                </Cell>
            </Grid>
        </div>
    </MainLayout>
);

export default DivineBountyScreen;