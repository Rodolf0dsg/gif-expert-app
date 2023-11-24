import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState( true );

    const getImages = async() => {

        const newImages = await getGifs(category);
        setImages( newImages );
        setLoading( false )
        
    }

    useEffect(()=> {

        getImages();
        
        // getGifs()
        //     .then( newImages => setImages(newImages));

    }, [] );

    return {
        images,
        isLoading,
    }
}
