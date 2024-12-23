import "./Home.css";
import Main from "../../components/main/Main";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <div className="Home">
      <div className="side">
        <Sidebar />
        <div className="nav">
          <Navbar />
          <Main/>
        </div>
      </div>
    </div>
  );
}

export default Home;