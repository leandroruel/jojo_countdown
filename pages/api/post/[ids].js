import { event } from "../../../data";

export default function eventHandler({ query: { id } }, res) {
  const filtered = event.filter((e) => e.id === id);

  // Event with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Event with id: ${id} not found.` });
  }
}
