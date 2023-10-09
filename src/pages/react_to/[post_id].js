import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export default function ReactToPost() {
  const router = useRouter();
  const { post_id } = router.query;

  const [imgURL, setImgURL] = useState(null);

  useEffect(() => {
    if (post_id) {
      // Create a reference to the specific image in Firebase Cloud Storage
      const storage = getStorage();
      const pathReference = ref(storage, `${post_id}.jpeg`); 

      getDownloadURL(pathReference)
        .then(url => {
          setImgURL(url);
        })
        .catch(err => {
          console.error('Error fetching image:', err);
        });
    }
  }, [post_id]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
    }}>
      <p style={{ color: 'white', marginBottom: '1rem' }}>Post ID: {post_id}</p>
      {imgURL ? (
        <img src={imgURL} alt={`Shared Post ${post_id}`} style={{ maxWidth: '100%', maxHeight: '80vh' }} />
      ) : (
        <p style={{ color: 'white' }}>Loading...</p>
      )}
    </div>
  );
}


