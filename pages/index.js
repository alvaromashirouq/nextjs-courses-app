import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

/*
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_DATA
    }
  };
}
*/
export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://alvaromashiro:<password>@cluster0.bwryvdh.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupCollection = db.collection('meetups');

  const meetups = await meetupCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image
      }))
    }
  };
}
export default Home;
