import { useParams } from "react-router-dom";

function TicketDetails() {
  const getParams = useParams();

  return (
    <>
      <div>{getParams.TicketDetails}</div>
    </>
  );
}

export default TicketDetails;
