import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        // console.log(target.value);
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length <= 1 ) return;

        // console.log( inputValue );
        onNewCategory( inputValue.trim() );
        setInputValue('');
        
    }


    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text" 
                placeholder="Buscar un Gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes= {
    onNewCategory: PropTypes.func.isRequired,
}