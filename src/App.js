import './App.css';
import ProfileCard from './Profile.js';


function App() {
  return (
    <div className="App">
      <h1>The Silly Clowns I Drew During A Very Specific Class Collection.</h1>

      <div className="box">
        <ProfileCard Image="/Clowns/World_sfastestclown.png" Name="World's Fastest Clown" Description="The fastest of them all. Cannot be outrun"/>
        <ProfileCard Image="/Clowns/World_sgoofiestclown.png" Name="World's Goodifest Clown" Description="It looks sad but it is feeling goofy."/>
        <ProfileCard Image="/Clowns/World_sMostPeacefulclown.png" Name="World's Most Peaceful Clown" Description="That is a water gun, your honor."/>
        <ProfileCard Image="/Clowns/World_smostviolentclown.png" Name="World's Most Violent Clown" Description="That thing can kill please be safe."/>
        <ProfileCard Image="/Clowns/World_snicestclown.png" Name="World's Nicest Clown" Description="It has the biggest heart among all."/>
        <ProfileCard Image="/Clowns/worldsmostdepressingclown.png" Name="World's Nicest Clown" Description="That smile is to hide the pain from others."/>
        <ProfileCard Image="/Clowns/theclownofalltimes.png" Name="The Clown of All Time" Description="It got promoted to clown of all time."/>
        <ProfileCard Image="/Clowns/laughingjackidk.png" Name="The Real Laughing Jack" Description="Based on a real creepypasta."/>
      </div>

      <h12>Made this around 2nd semester - 2nd Year on a school computer that somehow doesn't delete files after shutting off so it just kept on growing...</h12>

    </div>
  );
}

export default App;
