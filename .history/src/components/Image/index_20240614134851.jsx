import { forwardRef, useState } from 'react';
import images from '../../assets';

const defaultFn = () => {}

const Image = forwardRef(({ src, alt, className, style, fallback: customFallback = images.noImage, children, onClick = defaultFn}, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <>
            <img
                className={className}
                ref={ref}
                src={fallback || src}
                alt={alt}
                onClick={onClick}
                onError={handleError}
                style={style}
                loading='lazy'
            />
            {children}
        </>
    );
});

export default Image;
