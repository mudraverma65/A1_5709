import './styles.css';
import ProfileResults from './ProfileResults';
import { useLocation } from 'react-router-dom';
import React from 'react';

function SearchResults(){
    const location = useLocation();
    const searchResults = location.state;
    console.log(searchResults)
    
    return(
        <div class = "Frame">
            <div class = "SearchDetails">
                <div class = 'SearchTitle'><h2>Search Results...</h2></div>
                <div class = 'LocationTitle'>Location: Halifax</div>
            </div>
            <ProfileResults searchResults={searchResults} />
        </div>

    );
}

export default SearchResults;