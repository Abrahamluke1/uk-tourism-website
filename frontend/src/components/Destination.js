import React from "react";
import London from "../assests/london.jpg";
import Mountain2 from "../assests/ireland.jpg";
import Mountain3 from "../assests/liverpool.jpg";
import Mountain4 from "../assests/8.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        <DestinationData
          className="first-des"
          heading="Taal Volcano, Batangas"
          text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you’ll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip, and then unwind with some bulalo
            before heading back home!"
          img1={London}
          img2={Mountain2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Mt. Daguldul, Batangas"
          text="If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim."
          img1={Mountain3}
          img2={Mountain4}
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