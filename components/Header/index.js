import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import cookies from 'nookies';

const countries = [
  {
    label: 'us',
    name: 'United Satates',
  },
  {
    label: 'br',
    name: 'Brazil',
  },
];

const Header = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(router.query.country);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    router.push(`/[country]`, `/${e.target.value}`);
  };

  const renderCountries = () => {
    return countries.map((country, index) => {
      return (
        <option key={index} value={country.label}>
          {country.name}
        </option>
      );
    });
  };

  useEffect(() => {
    cookies.set(null, 'defaultCountry', selectedCountry, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }, [selectedCountry]);

  return (
    <div className=' header'>
      <select value={selectedCountry} onChange={handleChange}>
        {renderCountries()}
      </select>
      <style jsx>{`
        padding: 20px;
        background-color: #333;
        color: #fff;
        text-align: center;
      `}</style>
    </div>
  );
};

export default Header;
