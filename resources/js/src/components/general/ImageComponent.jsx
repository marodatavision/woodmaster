import React, { useRef, useState } from 'react';

const ImageComponent = ({src}) => {
    const image = useRef(null);
    const [valid, setValid] = useState(true);

    const checkValid = () => {
        if (!image.current.complete || image.current.naturalWidth < 1 || image.current.naturalHeight < 1) setValid(false);
    }

    if (valid) {
        return (
            <img
                src={src}
                onLoad={checkValid}
                onError={(e) => {
                    console.log(`Image error: ${src}`)
                    console.log(e);
                    setValid(false)
                }}
                ref={image} 
                height="80"
            />
        );
    }

    return <div>Image not valid</div>;
};

export default ImageComponent;