import './styles.css';
import ProfileResults from './ProfileResults';

function SearchResults(){
    return(
        <div class = "Frame">
            <div class = "SearchDetails">
                <div class = 'SearchTitle'><h2>Search Results for Architect</h2></div>
                <div class = 'LocationTitle'>Location: Halifax</div>
            </div>
            <ProfileResults/>
        </div>

    );
}

export default SearchResults;