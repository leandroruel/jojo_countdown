import { useEffect, useState } from "react";

const useEvent = (id = "") => {
  let [event, setEvent] = useState([]);
  let [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/post/${id}`)
      .then((response) => response.json())
      .then((data) => {
        event = setEvent(data);
      })
      .catch((error) => {
        error = setError(error);
      });
  }, []);

  return {
    event: event,
    isLoading: !error && !event,
    isError: error,
  };
};

export default useEvent;
