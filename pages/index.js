/** @format */
import Homes from "../components/Home";
import Layout from "../components/layout/Layout";
import { getAllRooms } from "../redux/actions/roomAction";
export default function Home() {
  return (
    <Layout>
      <Homes />
    </Layout>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllRooms(req));
    }
);
