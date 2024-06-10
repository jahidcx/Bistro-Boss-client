import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";


const UpdateItem = () => {

    const {name,category} = useLoaderData();
    // console.log(item);

    return (
        <div>
            <SectionTitle subHeading={"refresh Now"} heading={"Update Item"}></SectionTitle>
            <h2 className="text-4xl">Item name:{category}</h2>

        </div>
    );
};

export default UpdateItem;