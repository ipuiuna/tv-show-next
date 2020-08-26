import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';
import Error from 'next/error';

const Home = ({ shows, country, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  const renderShows = () => {
    return shows.map((item, index) => {
      const { show } = item;
      return (
        <li key={index}>
          <Thumbnail
            imgUrl={(show.image && show.image.medium) || undefined}
            caption={show.name}
            href='/[country]/[showId]'
            as={`/${country}/${show.id}`}
          />
        </li>
      );
    });
  };

  return (
    <div className='home'>
      <ul className='tvshoes-grid'>{renderShows()}</ul>;
      <style jsx>{`
        .tvshoes-grid {
          display: flex;
          flex-flow: row wrap;
        }
        :global(li) {
          font-size: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async (context) => {
  try {
    const country = context.query.country || 'us';
    const response = await axios.get(
      `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
    );

    return {
      shows: response.data,
      country,
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
    };
  }
};

export default Home;
