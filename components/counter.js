import Countdown from "react-countdown";

export default function Counter(props) {
  // Random component
  const Completionist = () => (
    <span>The event is now live! go check it out!</span>
  );

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="grid grid-cols-4 mb-4">
          <div className="flex flex-col items-center p-4">
            <span className="text-xl text-gray-900 bg-gray-100 p-5 font-sans font-bold">
              {days}
            </span>
            <span className="text-sm font-bold uppercase text-gray-400">
              days
            </span>
          </div>
          <div className="flex flex-col items-center p-4">
            <span className="text-xl text-gray-900 bg-gray-100 p-5 font-sans font-bold">
              {hours}
            </span>
            <span className="text-sm font-bold uppercase text-gray-400">
              hours
            </span>
          </div>
          <div className="flex flex-col items-center p-4">
            <span className="text-xl text-gray-900 bg-gray-100 p-5 font-sans font-bold">
              {minutes}
            </span>
            <span className="text-sm font-bold uppercase text-gray-400">
              minutes
            </span>
          </div>
          <div className="flex flex-col items-center p-4">
            <span className="text-xl text-gray-900 bg-gray-100 p-5 font-sans font-bold">
              {seconds}
            </span>
            <span className="text-sm font-bold uppercase text-gray-400">
              seconds
            </span>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={props.start} renderer={renderer} />;
}
