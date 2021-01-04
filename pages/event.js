import Counter from 'components/counter'

export default function Event(props) {
    const most_recent = props.events.reduce((a, b) => (a.start_date < b.start_date? a : b))
    const cover = most_recent.cover;
    return (
        <div className="rounded-lg lg:h-4/5 lg:w-4/5 bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url(${cover})`}}>
            <div className="bg-white w-3/6 rounded-lg p-20 absolute -bottom-4 inset-x-1/2 -translate-x-1/2">
                <h1 className="text-lg font-semibold mb-4 event-title">{most_recent.name}</h1>
                <Counter start={most_recent.start_date} />
                <a href="#" className="btn btn--black">share this event</a>
            </div>
        </div>
    )
}