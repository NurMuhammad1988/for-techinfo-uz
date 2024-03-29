import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser} from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import SideBar from "../conponents/SideBar";



const SingleBlog = () => {
    const data = useLoaderData();
    const {
        title,
        image,
        category,
        author,
        published_date,
        reading_time,
        content,
    } = data[0];

    // console.log(data);//blogslarga id berishdan oldin consoleda ko'rish uchunyozildi yani linkga o'tadi lekin ekranda ko'rinmeydi

    return (
        <div className="pt-14">
            {/* <div className="py-40 bg-black text-center text-white px-4">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
                    Single Blog Page
                </h2>
            </div> */}

            {/* blog details */}

            <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 ">
                <div className="lg:w-3/4 mx-auto">
                  {/* home yoki blog pagedan bloglarni ustiga bosganda ichiga kirish kodi shu fileda kodni tushunish uchun yuqoridagi SingleBlog funcsiyasiga qaralsin  */}
                    <div>
                      <img className="w-full mx-auto rounded" src={image} alt="" />
                    </div>
                    <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">{title}</h2>
                    <p className="mb-3 text-gray-600"> <FaUser className="inline-flex items-center mr-2"/> {author} | {published_date}</p>

                    <p className="mb-3 text-gray-600"> <FaClock className="inline-flex items-center mr-2"/>{reading_time}</p>
                    <p className="text-base text-gray-500 mb-6">{content}</p>

                    <div className="text-base text-gray-500 ">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quidem. Provident ullam eos adipisci quam, numquam vel, culpa impedit debitis non repellat totam aperiam expedita illo aliquam eaque deleniti? Minima!</p> <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quae perspiciatis incidunt labore repellat consectetur assumenda odit facere deleniti pariatur temporibus possimus optio vitae, delectus rem nesciunt fuga, esse dolores.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus natus maiores sed praesentium laudantium. Delectus itaque odit enim illum corporis quas ducimus, cum dignissimos quidem laudantium. Error repellat molestias at.</p>
                    </div>
                    
                </div>

                <div className="lg:w-1/2">
                  <SideBar/>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
