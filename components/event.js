import Counter from "components/counter";
import Spinner from "components/spinner";
import ShareButtons from "utils/webshare";
import mostRecent from "utils/sort";
import useEvent from "hooks/useEvent";
import { useRouter } from "next/router";

export default function Event() {
  const { event, isLoading, isError } = useEvent();
  const { locale } = useRouter();

  if (isLoading) {
    return <Spinner />;
  }

  const {
    eventDate,
    eventName,
    eventDescription,
    eventDay,
    eventMonth,
    eventCover,
  } = mostRecent(event);

  return (
    <div
      className="rounded-lg lg:h-4/5 sm:h-auto w-10/12 lg:w-4/5 bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${eventCover})` }}
    >
      <div className="bg-white lg:w-3/6 sm:w-full rounded-lg p-2 sm:p-5 md:p-10 lg:absolute lg:-bottom-20 lg:inset-x-1/2 lg:transform lg:-translate-x-1/2">
        <div className="lg:text-6xl sm:text-2xl font-semibold mb-4 text-center capitalize">
          {eventName}
        </div>
        <div
          className="text-gray-500 event-description"
          dangerouslySetInnerHTML={{ __html: eventDescription }}
        ></div>
        <Counter start={new Date(eventDate)} />
        <div className="flex flex-row items-center justify-around py-5">
          <div className="flex flex-row justify-between items-center border-2 py-5 px-4 rounded-lg">
            <div className="font-semibold pr-4">share:</div>
            <ShareButtons title={eventName} url="https://jojocountdown.com" />
          </div>
          <div className="calendar bg-white rounded-lg border-2 px-4 py-2 flex flex-col justify-center items-center">
            <span className="event-date font-semibold leading-10 text-pink-500">
              {eventDay < 10 ? `0${eventDay}` : eventDay}
            </span>
            <span className="event-month uppercase font-semibold text-gray-300">
              {eventMonth}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
