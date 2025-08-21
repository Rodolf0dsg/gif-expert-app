import { FC } from 'react';
import { Gif } from './interfaces/gif.interface';

interface Props {
    gifs: Gif[],
}


export const GifList: FC<Props> = ({ gifs }) => {
    return (
        <div className="gifs-container">
            { 
                gifs.map((gif) => (
                    <div key={ gif.id } className="gif-card">
                        <img src={gif.url} />
                        <h3>{gif.title}</h3>
                        <p>{gif.width} x {gif.height}</p>
                    </div>  
                )) 
            }
        </div>
    )
}
