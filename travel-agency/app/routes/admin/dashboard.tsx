import {Header} from "../../../components";

const Dashboard = () => {
    const user ={ name: 'Kawana'}
    return (
        <main className="dashboard wrapper">
            <Header 
               title={`Welcome ${user?.name ?? 'Guest'}`}
               description="Track pupolar destinations in real time"
            />

            Dashboard contents
        </main>
    )
}
export default Dashboard