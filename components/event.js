import Counter from 'components/counter'
import Modal from 'components/modal'
import ShareButtons from 'utils/webshare'
import { events } from 'events.json'

export default function Event() {
    const most_recent = events.reduce((a, b) => (a.start_date < b.start_date? a : b))
    const cover = most_recent.cover
    const day = (new Date(most_recent.start_date)).getDate()
    const month = (new Date(most_recent.start_date)).toLocaleString('en-us', { month: 'long' })

    return (
        <div className="rounded-lg lg:h-4/5 sm:h-auto w-10/12 lg:w-4/5 bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url(${cover})`}}>
            <div className="bg-white lg:w-3/6 sm:w-full rounded-lg p-2 sm:p-5 md:p-10 lg:absolute lg:-bottom-20 lg:inset-x-1/2 lg:transform lg:-translate-x-1/2">
                <div className="lg:text-6xl sm:text-2xl font-semibold mb-4 text-center capitalize">{most_recent.name}</div>
                <div className="text-gray-500 event-description" dangerouslySetInnerHTML={{__html:most_recent.description}}></div>
                <Counter start={most_recent.start_date} />
                <div className="flex flex-row items-center justify-around py-5">
                    <div className="flex flex-row justify-between items-center border-2 py-5 px-4 rounded-lg">
                        <div className="font-semibold pr-4">share:</div>
                        <ShareButtons title={most_recent.title} url="https://jojocountdown.com" />
                    </div>
                    <div className="calendar rounded-lg border-2 px-4 py-2 flex flex-col justify-center items-center">
                        <span className="event-date font-semibold leading-10 text-pink-500">
                            {day < 10 ? `0${day}` : day}
                        </span>
                        <span className="event-month uppercase font-semibold text-gray-300">
                            {month}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}