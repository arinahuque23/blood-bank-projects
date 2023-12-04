
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";


import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import JoditEditor from "jodit-react";
import "jodit/build/jodit.min.css";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const CreateBlogPost = () => {
            const { register, handleSubmit, reset } = useForm();
            const axiosPublic = useAxiosPublic();
            const axiosSecure = useAxiosSecure();
            const [content, setContent] = useState("");


            const onSubmit = async (data) => {
                        console.log(data)
                        // image upload to imgbb and then get an url
                        const imageFile = { image: data.image[0] }
                        const res = await axiosPublic.post(image_hosting_api, imageFile, {
                            headers: {
                                'content-type': 'multipart/form-data'
                            }
                        });
                        if (res.data.success) {
                            // now send the menu item data to the server with the image url
                            const blogItem = {
                                title: data.title,
                                content: content,
                                image: res.data.data.display_url
                            }
                            // 
                            const menuRes = await axiosSecure.post('/blogs', blogItem);
                            console.log(menuRes.data)
                            if(menuRes.data.insertedId){
                                // show success popup
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: `${data.name} is added to the menu.`,
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                            }
                        }
                        console.log( 'with image url', res.data);
                    };
  return (
    <div>
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col ">
            
            <div className="card mb-5 mx-1 flex-shrink-0 mt-5  lg:w-[800px]  border ">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div>
                      
                {/* Step 4 */}
                <div className="form-control mt-6">
                  <label className="label">
                    <span className="label-text">Blog Content</span>
                  </label>
                  <JoditEditor>
                    value={content}
                    tabIndex={1}
                    onChange={(newContent) => setContent(newContent)}
                    </JoditEditor>
                 
                </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Thumbnail Image </span>
                    </label>

                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-info w-full max-w-xs"
                      name="photo"
                      {...register("image", { required: true })}
                      placeholder="thumbnail image"
                    />
                   
                  </div>
                </div>
                <div className="lg:flex ">
                  <div className="form-control mr-2">
                    <label className="label">
                      <span className="label-text">Blog Title</span>
                    </label>
                    <input
                      type="text"
                      {...register("title", { required: true })}
                      name="title"
                      placeholder="title"
                      className="input input-bordered"
                    />
                   
                  </div>
                </div>
            

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Create Post"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPost;
