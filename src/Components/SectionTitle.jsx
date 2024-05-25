
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto  text-center mt-20">
            <p className="text-[#D99904] italic text-xl "> --- {subHeading} --- </p>
            <h2 className="text-[40px] uppercase border-y-4 p-3 mb-12 mt-4">{heading}</h2>
            
        </div>
    );
};

export default SectionTitle;