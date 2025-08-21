import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import { Gif } from "../interfaces/gif.interface";


export const useGifs = () => {

    const [ searches, setSearches ] = useState<string[]>([]);
    const [ gifData, setGifData ] = useState<Gif[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async(term:string) => {
        if(gifsCache.current[term]){
            setGifData( gifsCache.current[ term ]);
            return;
        }

        setIsLoading(true);
        const gifs = await getGifsByQuery( term );
        setGifData( gifs );
        setIsLoading(false)
    }

    const handleSearch = async( query: string = '') => {
        if (query.length === 0) return;

        const queryToSave = query.toLowerCase().trim();

        if (searches.includes(queryToSave)) {
            setGifData(gifsCache.current[queryToSave] || []);
            return;
        }

        setIsLoading(true)


        if( searches.includes( queryToSave ) ) return;

        setSearches([queryToSave, ...searches].slice(0,7));
        const gif = await getGifsByQuery( query );
        setGifData( gif );

        gifsCache.current[query] = gif;
        setIsLoading(false)
    };

    const deleteSearch = ( element:string ) => {
        setSearches( prev => prev.filter( search => search !== element) );
    }

    return {
        gifData,
        searches,
        isLoading,

        deleteSearch,
        handleSearch,
        handleTermClicked,
    }
}
