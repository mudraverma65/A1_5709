import './styles.css';
import search from './search.png';
import location from './location.png';


function Banner(){
    return(
        <div class = 'Frame'>
            <div class = 'Banner'>
                <div class = 'BannerTitle'>
                    Find the right professional for your task
                </div>
                <div class = 'SearchRow'>
                    <div class = 'Location'>
                        <select>
                            <option value="option1">Halifax</option>
                            <option value="option2">Mumbai</option>
                            <option value="option3">New York</option>
                        </select>
                    </div>
                    <div class = 'SearchBar'>
                        <img src={search} class="SearchIcon"/>
                        <input type="text"/> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

