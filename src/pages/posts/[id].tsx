import { useRouter } from "next/router";

const PostPage = () => {
  const router = useRouter();

  return <div>{router.query["id"]}</div>;
};

export default PostPage;
