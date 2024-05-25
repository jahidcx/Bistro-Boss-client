import Banner from "./Banner";
import Category from "./Category";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import Menu from "./Menu";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;