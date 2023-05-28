import './styles.css';
import electricians from './electrician.png';

function Categories(){
    return(
        <div class = 'Frame'>
            <div class = 'Categories'><h2>Categories</h2></div> 
            <div class = 'CategoryRow'>
                <div class = 'CategoryCard'>
                    <div class = 'CategoryIcon'>
                        <img src={electricians} class="electricians" alt="logo"/>
                    </div>
                    <div class = 'CategoryTitle'><h3>Electricians</h3></div>
                    <div class = 'ButtonS'>View all</div>
                </div>
                <div class = 'CategoryCard'>
                    <div class = 'CategoryIcon'>
                        <img src={electricians} class="electricians" alt="logo"/>
                    </div>
                    <div class = 'CategoryTitle'><h3>Electricians</h3></div>
                    <div class = 'ButtonS'>View all</div>
                </div>
                <div class = 'CategoryCard'>
                    <div class = 'CategoryIcon'>
                        <img src={electricians} class="electricians" alt="logo"/>
                    </div>
                    <div class = 'CategoryTitle'><h3>Electricians</h3></div>
                    <div class = 'ButtonS'>View all</div>
                </div>
            </div>
        </div>

    );
}

export default Categories;