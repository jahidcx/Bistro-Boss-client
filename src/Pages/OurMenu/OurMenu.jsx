import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from '../../../src/assets/menu/banner3.jpg'
import pizzaImg from '../../../src/assets/menu/pizza-bg.jpg'
import saladImg from '../../../src/assets/menu/salad-bg.jpg'
import soupImg from '../../../src/assets/menu/soup-bg.jpg'
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg'
import useMenu from "../../Hook/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory";


const OurMenu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item=> item.category=== "offered")
    const soup = menu.filter(item=> item.category=== "soup")
    const dessert = menu.filter(item=> item.category=== "dessert")
    const pizza = menu.filter(item=> item.category=== "pizza")
    const salad = menu.filter(item=> item.category=== "salad")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover
            img={menuImg}
            title="Our Menu"
            subTitle={"Would you like to try a dish?"}
            ></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} img={dessertImg} title={"desert"} subTitle={"That is so delicious"}></MenuCategory>
            <MenuCategory items={pizza} img={pizzaImg} title={"pizza"} subTitle={"That is so delicious"}></MenuCategory>
            <MenuCategory items={salad} img={saladImg} title={"salad"} subTitle={"That is so delicious"}></MenuCategory>
            <MenuCategory items={soup} img={soupImg} title={"soup"} subTitle={"That is so delicious"}></MenuCategory>
            
           
        </div>
    );
};

export default OurMenu;