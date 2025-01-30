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
  const { post_title } = params;

  let allBlogsData = [];
  let page = 1;
  let totalPages = 1;

  do {
    const allBlogsRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/open-campus-blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=25&timestamp=${Date.now()}`
    );
    const responseData = await allBlogsRes.json();

    if (responseData.data && responseData.data.length > 0) {
      allBlogsData = [...allBlogsData, ...responseData.data];
    }

    totalPages = responseData.meta.pagination.pageCount;
    page++;
  } while (page <= totalPages);

  // Filter out blogs with missing or undefined post_title
  const validBlogs = allBlogsData.filter((blog) => blog.post_title);
   
  // console.log('validBlogs-----------', validBlogs);
  

  const foundBlog = validBlogs.find((blog) => {
    const blogPostTitleSlug = slugify(blog.post_title);
    return blogPostTitleSlug === post_title;
  });

  // console.log('found blog---------', foundBlog);
  
  if (!foundBlog) {
    return { notFound: true };
  }

  // Fetch full blog data using documentId
  const blogRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/open-campus-blogs/${foundBlog.documentId}?populate[content][populate]=*&populate[opencampus_category][populate]=*&timestamp=${Date.now()}`
  );
  const blogData = await blogRes.json();

  // console.log('blog data------------', blogData);
  
  return {
    props: { blog: blogData.data },
    revalidate: 10,
  };
}


const EachBlog = ({ blog }) => {
  // console.log("EachBlog props.blog:", blog);
  return <CustomComponent blog={blog} />;
};

export default EachBlog;