import React from "react";
import "../styles/team.scss";




const Team = () => {
  return (
    
    <div className="section" id="team">
      
      <div class ="head"> 
        Our Team
        <img src="https://the-book-thieves.netlify.app/assets/Stars.png" alt="Stars as background" width="100%" height="auto" class="Stars1"></img>
        
        
        </div>
        
    <div class="row1">
    <img src="https://the-book-thieves.netlify.app/assets/Stars.png" alt="Stars as background" width="100%" height="auto" class="Stars2"></img>
      

      
    </div>
    <div class="row">
      <div class="column">
      <img
        src="/assets/president.png"
        alt="president"
      />
      <img
        src="assets\design head.png"
        alt="Design Head"
      />
        
        <img
        src="assets\writers forum head.png"
        alt=" Writers forum head"
      />
  
      </div>
      <div class="column">
        
      <img
        src="assets\vpresident.png"
        alt="vpresident"
      />

     <img
        src="assets\tech lead.png"
        alt="Tech Lead"
      />

     <img
        src="assets\speakers forum head.png"
        alt="Speakers Forum Head"
      />
      </div>

      <div class="column">
      <img
        src="assets\secretary1.png"
        alt="secretary"
      />
        <img
        src="assets\content head.png"
        alt="Content Head"
      />
        <img
        src="assets\TeamPic.png"
        alt="Readers Forum Lead"
      />
      </div>
      

     </div>

     <button onclick="topFunction()" id="scroll" title="Go to top"><img src="assets\scroll.png" alt="^"/></button>
     
    
     

     
     
     
     
     
     </div>




  );
 
  
  
  
};



export default Team;

