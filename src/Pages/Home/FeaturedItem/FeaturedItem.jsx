import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './FeaturedItem.css'


const FeaturedItem = () => {
    return (
        <div className="featured-item my-32 bg-fixed pt-6 md:pt-10">
            <SectionTitle
            heading="Featured Item"
            subHeading="check it out"
            ></SectionTitle>
            <div className="md:flex items-center justify-center md:pb-32 pb-10 ">
                <div>
                    <img className="w-[600px] h-[400px]" src={featuredImg} alt="" />
                </div>
                <div className="text-white md:pl-16 text-xl w-[600px] space-y-3">
                    <p>March 24, 2024</p>
                    <h2 className="uppercase">Where can i get some?</h2>
                    <p>Indulge in our exquisite Truffle Mushroom Risotto, a luxurious blend of creamy Arborio rice, earthy wild mushrooms, and fragrant truffle oil. Garnished with freshly grated Parmesan and a sprinkle of parsley, this dish is the epitome of gourmet comfort food. Perfectly balanced and decadently delicious, it is a must-try for any food enthusiast.</p>
                    <button className="btn btn-outline text-white">Order Now</button>

                </div>
            </div>
            
        </div>
    );
};

export default FeaturedItem;