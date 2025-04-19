import { EventCard, CardData } from "./components/card/EventCard";
import "./MyEventsPage.css";
import "./index.css";

export const MyEventsPage = () => {
  const exampleEventData: CardData = {
    id: 1,
    name: "Afternoon of games",
    date: "July 28",
    time: "4:00 PM",
    location: "Central Park, Play Area",
    activity: "Fetch, chase, socialising",
    rating: 4,
    breed: "All breeds welcome",
    size: "Medium to Large",
  };
  return (
    <>
      <div className="content-page">
        <h1 className="section-title">My upcoming events</h1>
        <div className="events-container">
          <EventCard event={exampleEventData} />
          <EventCard event={exampleEventData} />
          <EventCard event={exampleEventData} />
          <EventCard event={exampleEventData} />
          <EventCard event={exampleEventData} />
          <EventCard event={exampleEventData} />
        </div>
      </div>
    </>
  );
};
