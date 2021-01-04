export default function EventsList(props) {
    return (
        {props.events.map((event, index) => {
            <li>{event.name}</li>
        })}
    )
}