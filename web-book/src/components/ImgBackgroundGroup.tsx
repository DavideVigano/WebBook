import React from 'react';

interface Props {
    path: string;
}

function ImgBackgroundBook({ path }: Props) {
    return (
        <div style={{ position: 'relative', width: '100%', paddingTop: '30%' }}>
            <img
                src={path}
                alt=""
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Opzionale: per adattare l'immagine senza distorsioni
                }}
            />
        </div>
    );
}

export default ImgBackgroundBook;
