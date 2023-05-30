import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SearchResults from './SearchResults';

function SearchValid({searchResults}){
    const navigate = useNavigate();

    if (searchResults && searchResults.length > 0) {
        navigate('/search-results', { state: searchResults });
    }
    return null;
}

export default SearchValid;