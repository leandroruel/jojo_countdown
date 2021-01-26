export default function SVG({ properties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap={properties.linecap ? properties.linecap : null}
        strokeLinejoin={properties.linejoin ? properties.linejoin : null}
        strokeWidth={properties.width ? properties.width : null}
        d={properties.d}
      />
    </svg>
  );
}
