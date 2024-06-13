import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hook/useAuth'
import UseAxiosSecure from '../../../Hook/UseAxiosSecure';
import { FaDollarSign, FaJediOrder, FaUtensils } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa';

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: stats={} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            // console.log(res.data)
            return res.data;
        }
    })
    return (
        <div className='max-w-4xl mx-auto'>
            <h2 className="text-3xl uppercase my-8">Hi, welcome {user?.displayName ? user.displayName : 'Back'}</h2>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className='text-4xl'></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className='text-4xl'></FaUsers>
                    </div>
                    <div className="stat-title">Customers</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUtensils className='text-4xl'></FaUtensils>
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats.menuItem}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaJediOrder className='text-4xl'></FaJediOrder>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>


        </div>
    );
};

export default AdminHome;