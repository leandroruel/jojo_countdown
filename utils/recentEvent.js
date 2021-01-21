const mostRecent = (data) => {
  let recentEvent = data.reduce((a, b) =>
    a.start_date < b.start_date ? a : b
  );

  return {
    eventName: recentEvent.name,
    eventDescription: recentEvent.description,
    eventDate: recentEvent.start_date,
    eventDay: new Date(recentEvent.start_date).getDate(),
    eventMonth: new Date(recentEvent.start_date).toLocaleString("en-us", {
      month: "long",
    }),
    eventCover: recentEvent.cover,
  };
};

export default mostRecent;
