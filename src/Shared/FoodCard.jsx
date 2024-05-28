
const FoodCard = ({item}) => {
    const {image, recipe, name,price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute bg-[#111827] top-5 right-5 text-white px-3 py-1 ">${price}</p>
            <div className="card-body">
                <h2 className="text-center text-2xl font-semibold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn text-[#BB8506] border-0 hover:bg-black border-b-4 border-[#BB8506] uppercase text-lg">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;