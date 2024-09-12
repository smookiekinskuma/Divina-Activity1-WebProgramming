import React from 'react';
import './App.css';

function ProfileCard(props){
    return <div class="card-body">
                <img src={props.Image}></img>
                <h2>{props.Name}</h2>
                <p>{props.Description}</p>
           </div>
}

export default ProfileCard;