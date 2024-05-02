import Layout from 'components/molecules';
import Auth from './Auth';
import Alerts from 'components/atoms/Alerts';

export default function Application() {
  return (
    <>
      <Layout>
        <Auth />
      </Layout>
      <Alerts />
    </>
  );
}
