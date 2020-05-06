import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
interface BlogProps {
  url: {
    query: {
      slug: string;
    };
  };
}
const Blog: NextPage<BlogProps> = () => {
  const router = useRouter();
  const { slug, id, lang } = router.query;
  React.useEffect(() => {
    console.log(lang);
  }, [lang]);
  return (
    <div>
      <button
        onClick={() =>
          router.push(
            "/blog/hello-world?lang=en",
            "/blog/hello-world?lang=en",
            { shallow: true }
          )
        }
      >
        shallow
      </button>
    </div>
  );
};

export default Blog;
