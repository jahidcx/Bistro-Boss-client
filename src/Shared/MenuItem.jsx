

const MenuItem = ({item}) => {
    const {image,name,recipe,price}= item
    return (
        <div className="flex space-x-8">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[118px] h-[104px]" src={image} alt="" />
            <div className="space-y-3">
                <h2 className="text-xl uppercase font-semibold">{name}---------------------------- </h2>
                <p>{recipe}</p>
            </div>
            <p className="text-xl font-semibold text-[#BB8506] ">{price}$</p>
            
        </div>
    );
};

export default MenuItem;