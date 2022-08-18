import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
const NewMeetup = () => {
  const newMeetUpHandler = async (eventData) => {
    console.log(eventData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(eventData),
      headers: {
        'Content-type': 'application/json'
      }
    });

    const data = await response.json();
  };
  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add your own meetups" />
      </Head>
      <h1>new meet ups</h1>
      <NewMeetupForm onAddMeetup={newMeetUpHandler} />
    </>
  );
};

export default NewMeetup;
