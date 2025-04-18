import { EventCard, CardData } from "./components/card/EventCard";

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
      <EventCard event={exampleEventData} />
      <EventCard event={exampleEventData} />
      <EventCard event={exampleEventData} />
    </>
  );
};
