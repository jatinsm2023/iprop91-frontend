import Sidebar from '../Sidebar/Sidebar';
import ConciNav from './ConciNav/ConciNav';
export default function Concierge() {
    return (
        <>
            <div className="flex relative flex-row bg-gray-300">
                <Sidebar />
                <div className="m-2" style={{width: 'calc(100% - 13rem)'}}>
                    <ConciNav />
                </div>
            </div>
        </>
    );
}