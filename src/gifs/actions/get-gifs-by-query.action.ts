import { GiphyResponse } from "../interfaces/giphy.response";
import { Gif } from "../interfaces/gif.interface";
import { giphtApi } from "../api/gipht.api";

export const getGifsByQuery = async( query: string ): Promise<Gif[]> => {
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

};