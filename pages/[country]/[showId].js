import axios from 'axios';
import parse from 'html-react-parser';
import Cast from '../../components/Cast';
import Error from 'next/error';

const ShowDetails = ({ show = {}, statusCode }) => {
  const { name, image, summary, _embedded } = show;

  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <div className='show-details'>
      <div
        className='show-details_poster'
        style={{ backgroundImage: `url(${image.original})` }}
      ></div>
      <h1>{name}</h1>
      <div>{parse(summary)}</div>
      {_embedded.cast.length > 0 ? <Cast cast={_embedded.cast} /> : ''}

      <style jsx>{`
        .show-details_poster {
          height: 250px;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

ShowDetails.getInitialProps = async ({ query }) => {
  try {
    const { showId } = query;
    const response = await axios.get(
      `https://api.tvmaze.com/shows/${showId}?embed=cast`
    );
    return {
      show: response.data,
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
    };
  }
};

export default ShowDetails;
