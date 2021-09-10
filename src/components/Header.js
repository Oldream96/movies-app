import React, { useState } from 'react';

const Header = ({ setSearch,searchMovies }) => {

    const[busqueda,setBusqueda] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSearch(busqueda);
        if(busqueda.length > 0 ) searchMovies(busqueda);
    };

    const handleOnChange = (e) =>{
        setBusqueda(e.target.value);
    }

    return (
        <header>
            <form onSubmit={handleSubmit} >
                <input 
                    className="search" 
                    type="search"
                    placeholder="Buscar..."
                    value={busqueda}
                    onChange={handleOnChange}
                 />            
            </form>
        </header>
    );
};

export default Header;