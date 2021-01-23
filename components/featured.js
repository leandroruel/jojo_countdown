import Image from "next/image";

export default function Featured({ event }) {
  return (
    <div className="bg-black p-4 flex flex-col">
      <h1 className="font-semibold text-white text-8xl">{event.location}</h1>
      <p className="text-sm text-white my-4">{event.start_date}</p>
      <div className="m-auto w-4/5">
        <Image
          src={event.image}
          width={1200}
          height={600}
          layout="responsive"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
