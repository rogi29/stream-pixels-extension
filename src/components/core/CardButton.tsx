import './CardButton.css';
import classNames from 'classnames';
import { FunctionComponent } from 'react';

const CLASS_NAME = 'CardButton';

export type CardButtonVariant = 'primary' | 'secondary' | 'disabled';

export interface CardButtonProps {
    variant?: CardButtonVariant;
}

const CardButton: FunctionComponent<CardButtonProps> = ({ variant, children }) => (
    <button className={classNames(CLASS_NAME, variant && `variant-${variant}`)} disabled={variant === 'disabled'}>{children}</button>
);

export default CardButton;