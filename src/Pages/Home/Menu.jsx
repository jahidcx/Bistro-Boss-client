import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";


const Menu = () => {
    const [menu, setMenu]= useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popularItem = data.filter(item=> item.category === "popular")
            setMenu(popularItem);
        })
    },[])
    return (
        <div className="max-w-[1320px] mx-auto mb-32">
            <SectionTitle
                heading="from our Menu"
                subHeading="check it out"
            ></SectionTitle>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
         {
             menu.map( item => <MenuItem
                key={menu._id}
                item={item}
                ></MenuItem>)
          }
         </div>

        </div>
    );
};

export default Menu;