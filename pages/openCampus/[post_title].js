import CustomComponent from "../../src/components/openCampusBlogDetails";
import Loader from '../../src/components/commonComponents/Loader/index'
const slugify = (text) => {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

// ✅ Fetch All Blog Paths for Static Generation
export async function getStaticPaths() {
  try {
    let allBlogsData = [];
    let page = 1;
    let totalPages = 1;
    const pageSize = 100; // Fetch 100 per request

    do {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/open-campus-blogs?fields=post_title&pagination[page]=${page}&pagination[pageSize]=${pageSize}&timestamp=${Date.now()}`
      );
      const blogsData = await res.json();

      if (!blogsData.data || blogsData.data.length === 0) break;

      allBlogsData = [...allBlogsData, ...blogsData.data];
      totalPages = blogsData.meta.pagination.pageCount;
      page++;

      // Safety limit to prevent infinite loops
      if (page > totalPages) break;
    } while (page <= totalPages);

    if (!allBlogsData.length) {
      console.error("Error: No blogs found.");
      return { paths: [], fallback: "blocking" };
    }

    // Generate paths for static generation
    const paths = allBlogsData
      .filter((blog) => blog.post_title)
      .map((blog) => ({ params: { post_title: slugify(blog.post_title) } }));

    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return { paths: [], fallback: "blocking" };
  }
}

// ✅ Fetch Full Blog Data for Each Page
export async function getStaticProps({ params }) {
  try {
    const { post_title } = params;

    let allBlogsData = [];
    let page = 1;
    let totalPages = 1;
    const pageSize = 100; // Fetch more data per request

    do {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/open-campus-blogs?fields=post_title,documentId&pagination[page]=${page}&pagination[pageSize]=${pageSize}&timestamp=${Date.now()}`
      );
      const blogsData = await res.json();

      if (!blogsData.data || blogsData.data.length === 0) break;

      allBlogsData = [...allBlogsData, ...blogsData.data];
      totalPages = blogsData.meta.pagination.pageCount;
      page++;

      // Safety limit to prevent infinite loops
      if (page > totalPages) break;
    } while (page <= totalPages);

    if (!allBlogsData.length) {
      console.error("Error: No blogs found.");
      return { notFound: true };
    }

    // Find the matching blog
    const foundBlog = allBlogsData.find(
      (blog) => slugify(blog.post_title) === post_title
    );

    if (!foundBlog) {
      return { notFound: true };
    }

    // Fetch full blog details using documentId
    const blogRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/open-campus-blogs/${foundBlog.documentId}?populate[content][populate]=*&populate[opencampus_category][populate]=*&timestamp=${Date.now()}`
    );
    const blogData = await blogRes.json();

    if (!blogData.data) {
      console.error("Error fetching blog details:", blogData);
      return { notFound: true };
    }

    return {
      props: { blog: blogData.data },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { notFound: true };
  }
}

// ✅ Blog Page Component
const EachBlog = ({ blog }) => {
  if (!blog) {
    return <Loader/>; // Prevent hydration errors
  }
  return <CustomComponent blog={blog} />;
};

export default EachBlog;
