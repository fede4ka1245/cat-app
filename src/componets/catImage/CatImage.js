import { Button, Grid, Snackbar, Alert } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './CatImgae.module.scss';

function arrayBufferToBase64( buffer ) {
	var binary = '';
	var bytes = new Uint8Array( buffer );
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode( bytes[ i ] );
	}
	return window.btoa( binary );
}

const b64toBlob = async (b64Data) => {
  const base64Response = await fetch(b64Data);

  return base64Response.blob();
}

const copyImage = (pngImageBlob) => {
    try {
        navigator.clipboard.write([
            new ClipboardItem({
                'image/png': pngImageBlob
            })
        ]);
    } catch (error) {
        console.error(error);
    }
}

const CatImage = () => {
    const ref = useRef();
    
    useEffect(async () => {
        if (!ref.current) {
            return;
        }

        let image = await axios.get('https://cataas.com/cat', {responseType: 'arraybuffer'});
        let returnedB64 = arrayBufferToBase64(image.data);

        ref.current.src = `data:image/png;base64,${returnedB64}`;
    }, []);

    const [isSneakbarOpen, setIsSneakbarOpen] = useState(false);

    const toggleSneakbar = useCallback(() => {
        setIsSneakbarOpen(!isSneakbarOpen);
    }, [isSneakbarOpen]);

    const onCopyImageClick = useCallback(async () => {
        if (!ref.current) {
            return;
        }

        const blob = await b64toBlob(ref.current.src, 'image/png');
        copyImage(blob);
        toggleSneakbar();
    }, [toggleSneakbar]);

    const onChangeImageClick = useCallback(async () => {
        if (!ref.current) {
            return;
        }

        let image = await axios.get('https://cataas.com/cat', {responseType: 'arraybuffer'});
        let returnedB64 = arrayBufferToBase64(image.data);

        ref.current.src = `data:image/png;base64,${returnedB64}`;
    }, []);

    return (
        <>
            <Snackbar open={isSneakbarOpen} autoHideDuration={2000} onClose={toggleSneakbar}>
                <Alert onClose={toggleSneakbar} severity="success" sx={{ width: '100%' }}>
                    Image successfully copyed
                </Alert>
            </Snackbar>
            <img alt="cat" className={styles.image} ref={ref}/>
            <Grid container direction={'column'}>
                <Grid item>
                    <Button onClick={onCopyImageClick}>
                        Copy image
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={onChangeImageClick}>
                        Change image
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default CatImage;