import { Box } from '@mui/system';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// import axios from "../../services/instance";
import axios from 'axios';
import Card from '../Card/NewCard';

export default function Home() {
  // let {posts:post} = useFetch('http://localhost:8000/posts');
  // let {posts:post} = useFetch('http://localhost:8000/members/posts/');

  const [posts, setPosts] = React.useState(null);
  const [statusCode, setStatusCode] = React.useState(null);

  React.useEffect(() => {
    axios
      .get('https://cuert-backend-api.herokuapp.com/members/posts/')
      .then((response) => {
        console.log(response);
        setStatusCode(response.status);
        setPosts(response.data);
      })
      .catch((error) => {
        setStatusCode(error.response.status);
        console.log(error);
      });
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, []);

  React.useEffect(() => {
    console.log(posts);
  }, [posts]);

  const [cur, setCur] = React.useState('0');

  const pagChange = (num) => {
    setCur(num);
  };
  return (
    <Box>
      {posts && (
        <Card
          backgroundImage={`url(${posts[cur]?.image})`}
          name={posts && posts[cur]?.title}
          text={posts[cur]?.body}
          header={posts && posts[cur]?.title}
        />
      )}

      {posts && (
        <Stack
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Pagination
            count={posts.length - 1}
            color="primary"
            onChange={(e, num) => {
              pagChange(num);
            }}
          />
        </Stack>
      )}
    </Box>
  );
}
