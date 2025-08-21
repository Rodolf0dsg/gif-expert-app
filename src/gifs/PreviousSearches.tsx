import { FC } from "react"

interface Props {
    title: string,
    searches?: string[],
    onLabelClick: ( term: string ) => void,
    onDelete: ( element: string ) => void,
}

export const PreviousSearches: FC<Props> = ({ title, searches, onLabelClick, onDelete }) => {

    return (
        <div className="previous-searches">
            <h2>{ title }</h2>
            <ul className="previous-searches-list">
                {
                    searches?.map( search => (
                        <li 
                            key={ search }
                            onClick={ (event) => {
                                event.stopPropagation()
                                onLabelClick( search )
                            }}
                            title={`Buscar ${search} de nuevo`}
                        >
                            {search}
                            <button 
                                className="li-button" 
                                title="Eliminar busqueda"
                                onClick={ (e) => {
                                    e.stopPropagation()
                                    onDelete(search)
                                }}
                            >
                                &times;
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
