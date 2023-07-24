import "./TripStyles.css";
import TripData from "./TripData";
import Scotland from "../assests/scotland.jpg";
import Sandwood from "../assests/Sandwood.jpg";
import Seven from "../assests/Seven.jpg";

function Trip() {
  return (
    <div className="trip">
      {/* <h1>Recent Trips</h1> */}
      {/* <p>You can discover unique destinations using Google Maps.</p> */}
      <div className="tripcard">
        <TripData
          image={Scotland}
          heading="Scotland"
          text="Scotland's natural beauty weaves rugged Highlands, mystical allure, and tranquil lochs, like Ness and Lomond. Historic castles tell tales amidst serene countryside. From vibrant cities to remote isles, Scotland's captivating realms leave an indelible impression on every visitor."
        />
        <TripData
          image={Sandwood}
          heading="Sandwood"
          text="Sandwood Bay is a secluded and pristine beach on Scotland's northwest coast, known for its untouched beauty, golden sands, and turquoise waters. Accessible via a scenic 4.5-mile hike through the Sandwood Estate, it offers a tranquil retreat away from the crowds, making it a hidden paradise for nature enthusiasts and adventurers."
        />
        <TripData
          image={Seven}
          heading="Seven Sisters, East Sussex"
          text="The Seven Sisters are iconic chalk cliffs along East Sussex's coastline, boasting stunning views of the English Channel. Part of the South Downs National Park, they offer scenic coastal hikes and mesmerizing landscapes. A popular destination for nature enthusiasts and photographers, the Seven Sisters showcase the captivating beauty of the British coastline."
        />
      </div>
    </div>
  );
}

export default Trip;
