import ResponsiveAppBar from "../Navebar/Navebar";
import Card from "../Card/NewCard";
import { Box } from "@mui/system";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "../../services/instance";

export default function Home() {
  // let {posts:post} = useFetch('http://localhost:8000/posts');
  // let {posts:post} = useFetch('http://localhost:8000/members/posts/');

  const [posts, setPosts] = React.useState(null);
  React.useEffect(() => {
    axios
      .get("/members/posts/")
      .then((response) => {
        console.log(response);
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    console.log(posts);
  }, [posts]);

  let [cur, setCur] = React.useState("0");

  const pagChange = (num) => {
    setCur(num);
  };
  return (
    <Box>
      <ResponsiveAppBar />
      {posts && (
        <Card
          backgroundImage={"url(" + posts[cur]?.image + ")"}
          name={posts && posts[cur]?.title}
          text={posts[cur]?.body}
          header={posts && posts[cur]?.title}
        />
      )}

      {posts && (
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Pagination
            count={posts?.length - 1}
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
