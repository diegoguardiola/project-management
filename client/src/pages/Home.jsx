import AddClientModal from "../components/addClientModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
        <div className="d-flex gap-3 mb-4"> 
            <AddClientModal />
        </div>
        <Projects />
        <hr />
        <Clients />
    </div>
  )
}
