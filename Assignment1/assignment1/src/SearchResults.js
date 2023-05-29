import './styles.css';
import ProfileResults from './ProfileResults';

function SearchResults(){
    return(
        <div class = "Frame">
            <div class = "SearchDetails">
                <div class = 'SearchTitle'>Search Results for Architect</div>
                <div class = 'LocationTitle'>Location: Halifax</div>
            </div>
            <ProfileResults/>
        </div>

    );
}

export default SearchResults;