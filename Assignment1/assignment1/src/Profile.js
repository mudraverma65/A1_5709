import './styles.css';
import profile from './profile.jpg';

function Profile(){
    return(
        <div class = 'Frame'>
            <div class = 'ProfileBioRow'>
                <div class = 'ProfileImageCol'>
                    <img src={profile} class="ProfileImg"/>
                </div>
                <div class = 'ProfileDesCol'>
                    <div class = 'ProfileName'>
                        <h3>Ted Mosby</h3>
                    </div>
                    <div class = 'ProfileData'>
                        <h4>Age: 34</h4>
                        <h4>Experience: 8 years</h4>
                        <h4>Rating: 4.2</h4>
                    </div>
                    <div class = 'ProfileBio'>
                        <body>morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea</body>
                    </div>
                </div>
            </div>
            <div class = 'ProfileContactRow'>
                <div class = 'ContactTitle'>
                    <h2>Contact Info</h2>
                </div>
                <div class = 'ContactInfo'>
                    <body>Email ID: tedmosby@gmail.com</body>
                    <body>Phone No: +123 891 8000</body>
                </div>                
            </div>
        </div>
    );
}

export default Profile;