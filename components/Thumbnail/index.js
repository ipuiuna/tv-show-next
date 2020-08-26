import Link from 'next/link';

const Thumbnail = ({
  imgUrl = 'https://via.placeholder.com/210x295?text=?',
  caption,
  href = '',
  as = '',
  small = false,
}) => {
  return (
    <div className='thumbnail'>
      <Link href={href} as={as}>
        <a>
          <img src={imgUrl} className='thumbnail_img' />
          <h4 className='thumbnail_caption'>{caption}</h4>
        </a>
      </Link>

      <style jsx>{`
        .thumbnail_img {
          width: ${small ? '100px' : 'auto'};
          margin: 5px;
        }
        .thumbnail_caption {
          width: 180px;
        }
      `}</style>
    </div>
  );
};

export default Thumbnail;
