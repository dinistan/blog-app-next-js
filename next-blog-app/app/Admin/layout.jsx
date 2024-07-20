import Sidebar from "@/Components/AdminComponents/Sidebar";

export default function Layout({childern}){
    return (
        <>
        <div className="flext">
            <Sidebar/>
        </div>
            {childern}
        
        </>
    )
}