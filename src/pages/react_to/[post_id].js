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

      <div className="flex flex-col h-screen justify-center items-center bg-[#000321]">
        <p className="text-white mb-4">Post ID: {post_id}</p>
        {imgURL ? (
          <div className="relative w-1/2 max-w-[300px] h-0 pb-1/2 overflow-hidden">
            <img 
                src={imgURL} 
                alt={`Shared Post ${post_id}`} 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-full mask mask-center mask-repeat mask-image-radial-at-center"
                style={{ 
                  maskImage: 'radial-gradient(circle, black 45%, transparent 50%)' 
                }}
            />
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




