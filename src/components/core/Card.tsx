import './Card.css';
import classNames from 'classnames';
import { FunctionComponent } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CLASS_NAME = 'Card';

export interface CardProps {
    heading: string;
    half?: boolean;
    imgSrc?: string;
    imgAlt?: string;
    imgColor?: string;
}

const Card: FunctionComponent<CardProps> = ({
    heading,
    imgSrc,
    imgAlt,
    imgColor = '#fff',
    children
}) => (
    <article className={CLASS_NAME}>
        {imgSrc && (
            <figure className={`${CLASS_NAME}__figure`} style={{ backgroundColor: imgColor }}>
                <LazyLoadImage src={imgSrc} alt={imgAlt} />
            </figure>
        )}
        <h1 className={`${CLASS_NAME}__heading`}>
            <span className="innerText">{heading}</span>
        </h1>
        <div className={`${CLASS_NAME}__inner`}>
            {children}
        </div>
    </article>
);

export default Card;