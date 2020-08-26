import axios from 'axios';
import parse from 'html-react-parser';
import Cast from '../../components/Cast';

const ShowDetails = ({ show }) => {
  const { name, image, summary, _embedded } = show;

  return (
    <div className='show-details'>
      <div
        className='show-details_poster'
        style={{ backgroundImage: `url(${image.original})` }}
      ></div>
      <h1>{name}</h1>
      <div>{parse(summary)}</div>
      <Cast cast={_embedded.cast} />

      <style jsx>{`
        .show-details_poster {
          height: 200px;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

ShowDetails.getInitialProps = async () => {
  const response = await axios.get('http://api.tvmaze.com/shows/1?embed=cast');
  return {
    show: response.data,
  };
};

export default ShowDetails;
