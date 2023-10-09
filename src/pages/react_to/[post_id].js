import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { storage } from '../../lib/firebase';

export default function ReactToPost() {
  const router = useRouter();
  const { post_id } = router.query;

  const [imgURL, setImgURL] = useState(null);

  useEffect(() => {
    if (post_id) {
      // Fetch the image URL from Firebase Cloud Storage
      const imageRef = storage.ref().child(`${post_id}.jpeg`);

      imageRef
        .getDownloadURL()
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

