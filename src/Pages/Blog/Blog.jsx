import useDonationblog from "../../hooks/useDonationblog";

const Blog = () => {
  const [blog] = useDonationblog();
  console.log(blog);
  return (
    <div>
      <div></div>
      {blog.map((data) => (
        <div key={data._id} className="mb-10 mt-10 mx-[50vh]  my-5">
          <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={data.image}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{}</h1>
                <p className="py-6">{data.title}</p>
              </div>
              <div>{data.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
