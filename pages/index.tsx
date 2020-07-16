import Head from 'next/head';
import Clock from '../components/Clock';

const Home = () => (
  <div className="container">
    <Head>
      <title>Melograno</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Clock></Clock>
    </main>

    <footer>
    </footer>
  </div>
)

export default Home;
