import Counter from 'components/counter'

export default function Event(props) {
    const most_recent = props.events.reduce((a, b) => (a.start_date < b.start_date? a : b))

    return (
        <div className="flex flex-col">
            <Counter start={most_recent.start_date} />
            <h1 className="text-lg font-semibold mb-4 event-title">{most_recent.name}</h1>
            <div className="mb-4 font-medium text-sm">{most_recent.description}</div>
            <a href="#" className="btn btn--black">share this event</a>
        </div>
    )
}