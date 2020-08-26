import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <style jsx>{`
        :global(ul) {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      `}</style>
    </>
  );
}

export default MyApp;
