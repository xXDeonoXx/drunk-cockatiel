import type { NextPage } from 'next';
import Banner from '../components/atoms/Banner';
import Header from '../components/organisms/Header';
import DefaultTemplate from '../components/templates/Default';

const Home: NextPage = () => {
  return (
    <DefaultTemplate>
      <Header />
      <Banner />
    </DefaultTemplate>
  );
};

export default Home;
