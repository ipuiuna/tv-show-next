import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';

const Home = ({ shows, country }) => {
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

  return <ul className='tvshoes-grid'>{renderShows()}</ul>;
};

Home.getInitialProps = async (context) => {
  const country = context.query.country || 'us';
  const response = await axios.get(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  );

  return {
    shows: response.data,
    country,
  };
};

export default Home;
