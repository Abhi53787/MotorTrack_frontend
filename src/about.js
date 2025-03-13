import React, { useState } from 'react';

function About() {
    //create the about content using data-testid="about-content"
    
    return (
        <div className= "container-fluid mt-4 text-start" data-testid="about-content">
            <h2>
                About Us
            </h2>
            <p>Our company is one of the leading car dealerships in the country. We are proud to be associated with some of the most renowned car brands in the world. Our mission is to provide our customers with the best car buying experience and ensure that they drive away in their dream car with a smile.</p>
            <div className="row">
          <div className="col-md-4">
            <img src="https://images.timesdrive.in/photo/msid-151016779,thumbsize-364787,width-560,height-250,false/151016779.jpg" className="img-fluid" alt="Fronx"
            style={{borderRadius:"30px"}}
            />
            <h2>Fronx</h2>
            <p>The Fronx is a compact SUV that is designed to provide the perfect blend of style and substance. It has a powerful engine and a spacious interior, making it an ideal car for both city and highway driving.</p>
          </div>
          <div className="col-md-4">
            <img src=" https://images.timesdrive.in/photo/msid-151015441,thumbsize-469878,width-560,height-250,false/151015441.jpg" className="img-fluid" alt="Creta" 
            style={{borderRadius:"30px"}}/>
            <h2>Creta</h2>
            <p>The Creta is a premium compact SUV that is known for its stylish design and feature-packed interior. It has a powerful engine and a range of advanced safety features, making it a popular choice among car buyers.</p>

          </div>
          <div className="col-md-4">
            <img src="https://images.timesdrive.in/photo/msid-151021156,thumbsize-433889,width-560,height-250,false/151021156.jpg " className="img-fluid" alt="Scorpio N" 
            style={{borderRadius:"30px"}}/>
            <h2>Scorpio N</h2>
            <p>The Scorpio N is a rugged and reliable SUV that is designed to provide a comfortable and safe driving experience. It has a powerful engine and a range of advanced safety features, making it a popular choice among car buyers.</p>
          </div>
        </div>
      </div>
 
    );
    
  }

export default About;
