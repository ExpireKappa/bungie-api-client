import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
      <div style={{margin: "0 10px"}}>
          <h2>Dashboard</h2>
          <div>
              <Link to="/search">Search for a destiny player</Link>
          </div>
      </div>
    );
}
