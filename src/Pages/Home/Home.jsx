import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import Menu from "./Menu";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;