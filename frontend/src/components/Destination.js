import React from "react";
import London from "../assests/london.jpg";
import ireland from "../assests/ireland.jpg";
import liverpool from "../assests/liverpool.jpg";
import whistable from "../assests/whistable.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        <DestinationData
          className="first-des"
          heading="London Bridge, Dunluce Castle"
          text="In a whimsical fusion, the modern London Bridge finds itself on the rugged cliffs of Northern Ireland, adorned with the medieval grandeur of Dunluce Castle. Tourists now marvel at this enchanting spectacle, where contemporary engineering meets ancient architecture. As the bridge overlooks the Atlantic, echoes of legends and history create a magical atmosphere, captivating all who visit this extraordinary amalgamation."
          img1={London}
          img2={ireland}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Liverpool, Whistable"
          text="Discover the vibrant maritime history of Liverpool, with its iconic Albert Dock and The Beatles Story museum, then head to the charming seaside town of Whitstable for fresh oysters, coastal beauty, and artistic delights. Explore Liverpool's football legacy at Anfield Stadium and savor the creative spirit in Whitstable's art galleries, creating a perfect blend of history, culture, and seaside charm for tourists."
          img1={liverpool}
          img2={whistable}
        />
      </div>
    </>
  );
};

export default Destination;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
