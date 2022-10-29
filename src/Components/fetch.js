import { useEffect, useState } from "react";

const useFetch = (url) => {
  let [posts, setposts] = useState("");
  let [isPending, setPending] = useState(true);
  let [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          else {
            setError(true);
            setPending(false);
            throw new Error('Could not connect to Resource');
          }
        }).then((data) => {
          setPending(false);
          setposts(data);
        }).catch((err) => {
          setPending(false);
          setError(err.message);
        });
    }, 500);

  }, [url]);

  return { posts, isPending, error };
}

export default useFetch;