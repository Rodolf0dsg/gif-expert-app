import { GiphyResponse } from "../interfaces/giphy.response";
import { Gif } from "../interfaces/gif.interface";
import { giphtApi } from "../api/gipht.api";

export const getGifsByQuery = async( query: string ): Promise<Gif[]> => {

    if ( query.trim().length === 0 ){
        return [];
    }

    try {
        const response = await giphtApi<GiphyResponse>('/search', {
            params: {
                q: query,
                limit: 12,
            }
        });
        
        return response.data.data.map( gif => ({
            id:     gif.id,
            title:  gif.title,
            url:    gif.images.original.url,
            width:  Number(gif.images.original.width),
            height: Number(gif.images.original.height),
        })); 

    } catch (error) {
        console.error(error);
        return [];
    }
};