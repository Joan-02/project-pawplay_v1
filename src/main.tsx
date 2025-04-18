import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./Login.tsx";
import { Event } from "./eventPage/Event.tsx";
import { Profile } from "./Profile.tsx";
import { App } from "./App.tsx";
import { EventsMainPage } from "./EventsMainPage.tsx";
import { ProfileSelection } from "./ProfileSelection.tsx";
import "./index.css";
import { MyEventsPage } from "./MyEventsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<EventsMainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/event/:userEventId" element={<Event />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-selection" element={<ProfileSelection />} />
        <Route path="/my-events" element={<MyEventsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
