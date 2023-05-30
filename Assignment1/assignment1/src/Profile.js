import './styles.css';
import profile from './profile.jpg';
import { useLocation } from 'react-router-dom';
import React from 'react';

function Profile(){
    const location = useLocation();
    const profileData = location.state.profileData;
    console.log(profileData)
    return(
        <div class = 'Frame'>
            {profileData.map((result) => (
                <div> 
                <div class = 'ProfileBioRow'>
                    <div class = 'ProfileImageCol'>
                        <img src={profile} class="ProfileImg"/>
                    </div>
                <div class = 'ProfileDesCol'>
                    <div class = 'ProfileName'>
                        <h3>{result.name}</h3>
                    </div>
                    <div class = 'ProfileData'>
                        <h4>Age: {result.age}</h4>
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
            ))}  
        </div>
    );
}

export default Profile;