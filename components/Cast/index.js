import Thumbnail from '../Thumbnail';

const Cast = ({ cast }) => {
  const renderCast = () => {
    return cast.map((castItem, index) => {
      const { image, name } = castItem.person;
      return (
        <li key={index}>
          <Thumbnail
            imgUrl={(image && image.medium) || undefined}
            caption={name}
            small={true}
          ></Thumbnail>
        </li>
      );
    });
  };

  return (
    <div className='cast'>
      <h3>Cast</h3>
      <ul className='cast_list'>{renderCast()}</ul>
      <style jsx>{`
        .cast_list {
          display: flex;
          overflow-x: scroll;
        }

        .cast_list > :global(li) {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Cast;
