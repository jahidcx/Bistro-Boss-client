import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_key = import.meta.env.VITE_img_hosting_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = UseAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        // img upload to imgBB then get an url
        const imgFile = { image: data.image[0] }
        const res = await axiosPublic.post(img_hosting_api, imgFile,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data);
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            // console.log(menuRes.data);
            if(menuRes.data.insertedId){
                reset();
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        }
    }
    return (
        <div>
            <SectionTitle
                subHeading={"what's new?"}
                heading={"add item"}
            ></SectionTitle>

            <div className="max-w-xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                    </label>
                    <div className="flex gap-6 mt-4">
                        {/* category */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue="default" {...register("category", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="default" >Select a category</option>
                                <option value="salad">salad</option>
                                <option value="soup">soup</option>
                                <option value="pizza">pizza</option>
                                <option value="dessert">dessert</option>
                                <option value="drinks">drinks</option>

                            </select>
                        </label>
                        {/* price */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* recipe details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text mt-4">Recipe Details</span>
                        </div>
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24 mb-4" placeholder="Recipe details"></textarea>
                    </label>
                    {/* file */}
                    <input type="file" {...register('image', { required: true })} className="file-input w-full max-w-xs mb-4" />
                    <br />
                    <button className="btn bg-[#D1A054] border-none text-white font-semibold ">Add Item</button>

                </form>

            </div>
        </div>
    );
};

export default AddItems;