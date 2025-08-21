import { GifList } from './gifs/GifList';
import { PreviousSearches } from "./gifs/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs";
import { Loader } from './shared/components/loader';

export const GifsApp = () => {

    const { gifData, 
            searches, 
            isLoading,
            handleSearch,
            handleTermClicked,
            deleteSearch,
        } = useGifs();

    return (
        <>
            <CustomHeader 
                title="Buscador de Gifs"
                description="Descubre y comparte el gif perfecto"
            />

            <SearchBar
                placeholder="Buscar"
                onQuery={ handleSearch }
            />

            <PreviousSearches 
                title="Busquedas previas" 
                searches={ searches }
                onLabelClick={ handleTermClicked }    
                onDelete={ deleteSearch }        
            />

            {
                isLoading  
                    ? <Loader/>
                    : <GifList gifs={ gifData }/>
            }
            
        </>
    )
}
