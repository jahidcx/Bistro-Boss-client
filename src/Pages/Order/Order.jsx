import Cover from "../../Shared/Cover";
import orderCoverImg from '../../../src/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hook/useMenu";
import FoodCard from "../../Shared/FoodCard";



const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const drinks = menu.filter(item=> item.category=== "drinks")
    const soup = menu.filter(item=> item.category=== "soup")
    const dessert = menu.filter(item=> item.category=== "dessert")
    const pizza = menu.filter(item=> item.category=== "pizza")
    const salad = menu.filter(item=> item.category=== "salad")
    return (
        <div>
            <Cover img={orderCoverImg} title="Order" subTitle="There are various foods"></Cover>
           <div className="my-32 max-w-[1220px] mx-auto">
           <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 mt-14">
                        {
                            salad.map(item=> <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 mt-14">
                        {
                            pizza.map(item=> <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 mt-14">
                        {
                            soup.map(item=> <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 mt-14">
                        {
                            dessert.map(item=> <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 mt-14">
                        {
                            drinks.map(item=> <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
           </div>


        </div>
    );
};

export default Order;