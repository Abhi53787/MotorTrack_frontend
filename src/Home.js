import React from "react";
 
function Home() {
  return (
    <div className="container-fluid px-0">  {/* Full-width container */}
    <h1 className="text-center text-dark my-4">Track. Manage. Drive. Forward.</h1>
     
    <marquee>Book Your Dream One</marquee>

    {/* Car Images - Full Width */}
    <div className="w-100">
      <img
        src="https://www.shelby.com/Portals/0/EasyGalleryImages/5687/Chameleon/Thumbs/7783sstbShelbyGT350mainbanner1.jpg"
        className="img-fluid w-100"
        alt="Car 1"
      />
    </div>
    <div className="w-100">
      <img
        src="https://www.shelby.com/Portals/0/EasyGalleryImages/5687/Chameleon/Thumbs/7520sstbshelby-2024-F150-homebanner.jpg"
        className="img-fluid w-100"
        alt="Car 2"
      />
    </div>
    <div className="w-100">
      <img
        src="https://www.shelby.com/Portals/0/EasyGalleryImages/6258/Chameleon/Thumbs/2576sstbSHCbanner.jpg"
        className="img-fluid w-100"
        alt="Car 3"
      />
    </div>
  </div>
  );
}

export default Home;
