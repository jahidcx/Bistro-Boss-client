import useAuth from "../../../Hook/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className="text-3xl">Hi, welcome {user?.displayName ? user.displayName : 'Back'}</h2>
            
            
        </div>
    );
};

export default UserHome;