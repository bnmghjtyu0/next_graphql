import { NextPage } from "next";
import { useAmp } from "next/amp";
import { useRouter } from "next/router";
interface PostProps {
  url: {
    query: {
      slug: string;
    };
  };
}
const Post: NextPage<PostProps> = () => {
  const router = useRouter();
  const { slug, id } = router.query;
  console.log(slug); //["a","b","c"]
  console.log(id); //1231

  const isAmp = useAmp();
  return <div>123</div>;
};

export default Post;
