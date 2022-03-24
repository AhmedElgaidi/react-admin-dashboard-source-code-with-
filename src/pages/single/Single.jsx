import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information:</h1>
            <div className="item">
              <div className="editButton">Edit</div>
              <img 
                src="https://res.cloudinary.com/dvmkzbrcs/image/upload/v1647691011/My%20blog%20photos/me_compressed.jpg" alt="Ahmed Elgaidi" 
                className='avatar'
              />
              <div className="details">
                <h2 className="itemTitle">Ahmed Elgaidi</h2>
                <div className="itemDetail">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">ahmedelgaidi@gmail.com</div>
                </div>
                <div className="itemDetail">
                  <div className="itemKey">Phone:</div>
                  <div className="itemValue">+20 1210939257</div>
                </div>
                <div className="itemDetail">
                  <div className="itemKey">Country:</div>
                  <div className="itemValue">Egypt</div>
                </div>

              </div>
            </div>
          </div>
          <div className="right">
            {/* pass those props, aspect is the height and width ratio */}
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h2 className="title">
            Last transactions:
          </h2>
          <List />
        </div>

      </div>
    </div>
  )
}

export default Single