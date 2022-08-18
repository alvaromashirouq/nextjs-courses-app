import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import Head from 'next/head';

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail {...props.meetupData} />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://alvaromashiro:<password>@cluster0.bwryvdh.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupCollection = db.collection('meetups');

  const result = await meetupCollection.find({}, { _id: 1 }).toArray();

  console.log(result);

  client.close();

  return {
    fallback: 'blocking',
    paths: result.map((meetup) => ({
      params: { meetupId: meetup._id.toString() }
    }))
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    'mongodb+srv://alvaromashiro:<password>@cluster0.bwryvdh.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupCollection = db.collection('meetups');

  const result = await meetupCollection.findOne({ _id: ObjectId(meetupId) });

  console.log(result);

  client.close();

  return {
    props: {
      meetupData: {
        id: result._id.toString(),
        title: result.title,
        address: result.address,
        description: result.description,
        image: result.image
      }
    }
  };
}

export default MeetupDetails;
