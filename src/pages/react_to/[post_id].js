import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../lib/firebase'; 
import Head from 'next/head';

const ReactToPost = ({ imgURL, post_id }) => {
  return (
    <>
      <Head>
        <title>React to my post</title>
        <meta name="description" content="View and react to the shared post." />
        <meta property="og:title" content="React to my post" />
        <meta property="og:description" content="View and react to the shared post." />
        <meta property="og:type" content="website" />
        {imgURL && <meta property="og:image" content={imgURL} />}
        <meta property="og:url" content={`https://lynkapp.co/react_to/${post_id}`} />
      </Head>

      <div className="flex flex-col h-screen justify-center items-center" style={{ backgroundColor: '#000321' }}>
        <p className="text-white mb-4">Post ID: {post_id}</p>
        {imgURL ? (
          <div className="rounded-full overflow-hidden" style={{ width: '50%', paddingBottom: '50%' }}>
            <img src={imgURL} alt={`Shared Post ${post_id}`} className="absolute object-cover w-full h-full" />
          </div>
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const post_id = context.params.post_id;
  const pathReference = ref(storage, `${post_id}.jpeg`);

  let imgURL = null;
  
  try {
    imgURL = await getDownloadURL(pathReference);
  } catch (err) {
    console.error('Error fetching image:', err);
  }

  return {
    props: {
      post_id,
      imgURL
    }
  };
}

export default ReactToPost;






