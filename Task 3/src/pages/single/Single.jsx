import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {


  return (
    
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            
            <h1 className="title">Question</h1>
            <p>Full form of RAM ?</p>

            
          </div>
          <div className="right">
             <button className ="btn">Add New Test </button>
            
          </div>
        </div>
        <div className="bottom">
        {
          <ul className="option">
            <ul>Random access Memory</ul>
            <ul>Random access Measure</ul>
            <ul>Random access money</ul>
            <ul>Random a Memory</ul>
          </ul>
        }
        
        </div>
       
      </div>
    </div>
  );
};

export default Single;
