import './styles.css';
import profile from './profile.jpg';

function ProfileResults(){
    return(
        <div class = 'Frame'>
            <div class = 'ResultsRow'>
                <div class = 'ProfileImgCol'>
                    <img src={profile} class="ProfileImgResults"/>
                </div>
                <div class = 'ProfileCol'>
                    <h3>Ted Mosby</h3>
                    <div class = 'ProfileDes'><body>morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea</body></div>
                </div>
                <div class = 'ProfileRatingCol'>
                    <div class = 'RatingR'>4.2</div>
                    <h5>Rating</h5>
                    <div class ='ViewProfile'>
                        <div class = 'ButtonS'>View Profile</div>
                    </div> 
                </div>
            </div>
        </div>

    );
}

export default ProfileResults;