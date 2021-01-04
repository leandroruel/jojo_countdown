import Counter from 'components/counter'

export default function Event(props) {
    const most_recent = props.events.reduce((a, b) => (a.start_date < b.start_date? a : b))
    const cover = most_recent.cover;
    return (
        <div className="sm:rounded-none lg:rounded-lg lg:h-4/5 sm:h-auto sm:w-full lg:w-4/5 bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url(${cover})`}}>
            <div className="bg-white lg:w-3/6 sm:h-56 sm:w-full rounded-lg md:p-10 sm:p-5 lg:absolute lg:-bottom-20 lg:inset-x-1/2 lg:transform lg:-translate-x-1/2">
                <div className="font-lg font-semibold mb-4 text-center capitalize">{most_recent.name}</div>
                <Counter start={most_recent.start_date} />
                <div className="flex flex-row items-center justify-around py-5">
                    <a href="#" className="btn btn--black btn--lg">share this event</a>
                    <div className="calendar rounded-x1 border h-10 w-10"></div>
                </div>
            </div>
        </div>
    )
}