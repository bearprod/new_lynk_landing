import { useRouter } from 'next/router';

export default function ReactToPost() {
  const router = useRouter();
  const { post_id } = router.query;

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
    </div>
  );
}
