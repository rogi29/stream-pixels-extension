import './Slot.css';
import classNames from 'classnames';
import { useDrop } from 'react-dnd';
import { HTMLAttributes } from 'react';

const CLASS_NAME = 'Slot';

export type SlotBaseProps = HTMLAttributes<HTMLDivElement>;

export interface SlotProps extends SlotBaseProps {
    type?: string | string[];
    onDrop?: (e: any) => void;
}

const Slot = ({
    children,
    className,
    type,
    onDrop,
    ...props
}: SlotProps) => {
    const [ collectedProps, dropRef ] = useDrop(() => ({
        accept: type || [],
        drop: onDrop
    }));

    return (
        <div {...props} ref={dropRef} className={classNames(CLASS_NAME, className)}>
            {children}
        </div>
    );
};

export default Slot;