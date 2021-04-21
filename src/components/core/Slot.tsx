import './Slot.css';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'Slot';

export type SlotBaseProps = HTMLAttributes<HTMLDivElement>;

export interface SlotProps extends SlotBaseProps {}

const Slot = ({
    children,
    className,
    ...props
}: SlotProps) => (
    <div {...props} className={classNames(CLASS_NAME, className)}>
        {children}
    </div>
);

export default Slot;