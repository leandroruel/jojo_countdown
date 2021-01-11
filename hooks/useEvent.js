import { useEffect, useState } from "react";

const useEvent = () => {
  let [recentEvent, setRecentEvent] = useState({});
  let [eventName, setEventName] = useState("");
  let [eventDescription, setEventDescription] = useState("");
  let [eventCover, setEventCover] = useState("");
  let [eventDate, setEventDate] = useState("");
  let [eventDay, setEventDay] = useState("");
  let [eventMonth, setEventMonth] = useState("");

  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then(({ data }) => {
        const recent = data.reduce((a, b) =>
          a.start_date < b.start_date ? a : b
        );
        recentEvent = setRecentEvent(recent);
        eventName = setEventName(recent.name);
        eventDescription = setEventDescription(recent.description);
        eventDate = setEventDate(recent.start_date);
        eventDay = setEventDay(new Date(recent.start_date).getDate());
        eventMonth = setEventMonth(
          new Date(recent.start_date).toLocaleString("en-us", {
            month: "long",
          })
        );
        eventCover = setEventCover(recent.cover);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return {
    recentEvent,
    eventName,
    eventDescription,
    eventCover,
    eventDate,
    eventDay,
    eventMonth,
  };
};

export default useEvent;
