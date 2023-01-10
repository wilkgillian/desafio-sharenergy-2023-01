import Dashboard from '../components/Dashboard';
import Layout from '../components/Layout';
import UsersList from '../components/UsersList';

function Home() {
  return (
    <Layout>
      <Dashboard title="TODOS OS USUÁRIOS">
        <UsersList />
      </Dashboard>
    </Layout>
  );
}

export default Home;
