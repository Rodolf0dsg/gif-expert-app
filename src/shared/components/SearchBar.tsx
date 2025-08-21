import React, { useEffect, useState } from "react"

interface Props {
    placeholder?: string,
    onQuery: (query: string) => void,
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }:Props ) => {

    const [query, setQuery] = useState('');

    useEffect(() => {

        const timeout = setTimeout(() => {
            onQuery( query );
        }, 700);

        return () => {
            clearTimeout( timeout );
        }
    }, [query, onQuery])
    

    const handleSearch = () => {
        onQuery( query );
        // setQuery('');
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder={ placeholder }
                value={ query }
                onChange={ (event) => setQuery( event.target.value )}
                onKeyDown={ handleKeyDown }
            />
            <button onClick={ handleSearch }>Buscar</button> 
        </div>
    )
}
