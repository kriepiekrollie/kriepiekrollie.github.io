import "./ResponsiveText.css";

export default function ResponsiveText({shortText, longText}) {
  return (
    <>
      <span className="shortText"> {shortText} </span>
      <span className="longText"> {longText} </span>
    </>
  )
}
