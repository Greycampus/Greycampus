import CustomComponent from "../../src/components/openCampusBlogDetails";

const slugify = (text) => {
  if (!text) {
    return ''; // Return an empty string or handle the case where text is undefined/null
  }
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export async function getStaticPaths() {
  const API_URL = `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/open-campus-blogs?populate=*&timestamp=${Date.now()}`;
  const res = await fetch(API_URL);
  const blogsData = await res.json();

  // Filter out blogs with missing or undefined post_title
  const validBlogs = blogsData.data.filter((blog) => blog.post_title);

  const paths = validBlogs.map((blog) => {
    const postTitleSlug = slugify(blog.post_title);
    return { params: { post_title: postTitleSlug } }; // Only post_title in params
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { post_title } = params; // Only post_title param

  const allBlogsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/open-campus-blogs?populate=*&timestamp=${Date.now()}`
  );
  const allBlogsData = await allBlogsRes.json();

  // Filter out blogs with missing or undefined post_title
  const validBlogs = allBlogsData.data.filter((blog) => blog.post_title);

  const foundBlog = validBlogs.find((blog) => {
    const blogPostTitleSlug = slugify(blog.post_title);
    return blogPostTitleSlug === post_title; // Match only by post_title
  });

  if (!foundBlog) {
    return { notFound: true };
  }

  // Fetch full blog data using documentId
  const blogRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/open-campus-blogs/${foundBlog.documentId}?populate[content][populate]=*&populate[opencampus_category][populate]=*&timestamp=${Date.now()}`
  );
  const blogData = await blogRes.json();

  return {
    props: { blog: blogData.data },
    revalidate: 10,
  };
}

const EachBlog = ({ blog }) => {
  return <CustomComponent blog={blog} />;
};

export default EachBlog;