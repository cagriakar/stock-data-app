import { useParams } from 'react-router-dom';

export default function TickerInformation() {
  const params = useParams();

  return <div>{JSON.stringify(params, null, 2)}</div>;
}
