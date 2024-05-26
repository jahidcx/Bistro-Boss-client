import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";



const MenuCategory = ({ items,title, img,subTitle }) => {

    return (
        <div>
            {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
            <div className="max-w-[1320px] mx-auto mt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <button className="btn btn-outline  border-0 border-b-4 my-11 ">Order Your Favourite Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;