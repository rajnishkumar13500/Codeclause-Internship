import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Passing Percentage</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={80} text={"80%"} strokeWidth={5} />
        </div>
        <p className="title">Total number of students passed today</p>
        <p className="amount">80</p>
        
        
      </div>
    </div>
  );
};

export default Featured;
