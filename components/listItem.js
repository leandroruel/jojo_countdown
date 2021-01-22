import Image from "next/image";

export default function ListItem({ event }) {
  return (
    <article className="p-4 flex space-x-4 bg-white mb-4 rounded-sm">
      <Image
        src={event.image}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        width={144}
        height={100}
      />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {event.name}
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">Date</dt>
            <dd>
              <abbr title={`${event.start_date}`}>{event.start_date}</abbr>
            </dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal text-gray-500">
            <dt className="inline">Location:</dt>{" "}
            <dd className="inline">{event.location}</dd>
          </div>
          <a
            href=""
            className="inline-block absolute top-0 right-0 rounded-sm bg-pink-400 text-white px-2 py-2 hidden sm:flex xl:flex items-center space-x-1"
          >
            Learn more
          </a>
        </dl>
      </div>
    </article>
  );
}
