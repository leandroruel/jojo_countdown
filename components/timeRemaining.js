import Countdown from "react-countdown";
import { useRouter } from "next/router";
import translations from "i18n";

export default function timeRemaining({ datetime }) {
  const { locale } = useRouter();

  //get the string location
  const getLang = translations.find((result) => result.lang == locale).data;

  // Random component
  const Completionist = () => (
    <span>
      {getLang.map((r) => {
        return r.timeRemaining.eventFinished;
      })}
    </span>
  );

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    let result = `${days} days remaining`;

    if (days == 0) {
      result = `${hours} hours remaining`;
    } else if (hours == 0) {
      result = `${minutes} minutes remaining`;
    }

    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return result;
    }
  };

  return <Countdown date={datetime} renderer={renderer} />;
}
