import React from "react";
import Dashboard from "../components/Dashboard";
import Layout from "../components/Layout";
import UsersList from "../components/UsersList";

function Users() {
  return (
    <Layout>
      <Dashboard title="USUÁRIOS">
        <UsersList />
      </Dashboard>
    </Layout>
  );
}

export default Users;
