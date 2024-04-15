import airportConfig from "../../src/config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { location, runways, parkingSpots } = airportConfig;
  const navigate = useNavigate();

  const [weatherData] = useState([
    { date: "2024-04-09", temperature: "25°C", conditions: "Sunny" },
    { date: "2024-04-08", temperature: "20°C", conditions: "Partly Cloudy" },
    { date: "2024-04-07", temperature: "18°C", conditions: "Rainy" },
    { date: "2024-04-06", temperature: "15°C", conditions: "Windy" },
    { date: "2024-04-05", temperature: "10°C", conditions: "Foggy" },
    { date: "2024-04-04", temperature: "5°C", conditions: "Snow" },
    { date: "2024-04-03", temperature: "22°C", conditions: "Sunny" },
    { date: "2024-04-02", temperature: "21°C", conditions: "Cloudy" },
    { date: "2024-04-01", temperature: "19°C", conditions: "Rainy" },
    { date: "2024-03-31", temperature: "17°C", conditions: "Thunderstorm" },
  ]);

  const [parkingData] = useState([
    { spot: "Spot 1", type: "Airliner", occupancy: "NC9574" },
    { spot: "Spot 2", type: "Airliner", occupancy: "Empty" },
    { spot: "Spot 3", type: "Private", occupancy: "Empty" },
    { spot: "Spot 4", type: "Private", occupancy: "Empty" },
    { spot: "Spot 5", type: "Private", occupancy: "NC1004" },
    { spot: "Spot 6", type: "Airliner", occupancy: "Empty" },
    { spot: "Spot 7", type: "Airliner", occupancy: "Empty" },
    { spot: "Spot 8", type: "Private", occupancy: "NC2342" },
    { spot: "Spot 9", type: "Private", occupancy: "Empty" },
    { spot: "Spot 10", type: "Private", occupancy: "Empty" },
  ]);

  const [aircraftList] = useState([
    { id: 1, name: "Aircraft 1", status: "Parked", callSign: "NC9574" },
    { id: 2, name: "Aircraft 2", status: "Airborne", callSign: "NC1004" },
    { id: 3, name: "Aircraft 3", status: "Approach", callSign: "NC2342" },
    { id: 4, name: "Aircraft 4", status: "Landed", callSign: "NC3456" },
    { id: 5, name: "Aircraft 5", status: "Parked", callSign: "NC4567" },
    { id: 6, name: "Aircraft 6", status: "Airborne", callSign: "NC5678" },
    { id: 7, name: "Aircraft 7", status: "Approach", callSign: "NC6789" },
    { id: 8, name: "Aircraft 8", status: "Landed", callSign: "NC7890" },
    { id: 9, name: "Aircraft 9", status: "Parked", callSign: "NC8901" },
    { id: 10, name: "Aircraft 10", status: "Airborne", callSign: "NC9012" },
  ]);

  const [stateChangeLog] = useState([
    {
      id: 1,
      aircraftName: "Aircraft 1",
      state: "Landed",
      date: "2024-04-09",
      time: "10:30:00",
      callSign: "NC9574",
    },
    {
      id: 2,
      aircraftName: "Aircraft 2",
      state: "Departed",
      date: "2024-04-09",
      time: "10:35:00",
      callSign: "NC1004",
    },
    {
      id: 3,
      aircraftName: "Aircraft 3",
      state: "Parked",
      date: "2024-04-09",
      time: "10:40:00",
      callSign: "NC2342",
    },
    {
      id: 4,
      aircraftName: "Aircraft 4",
      state: "Airborne",
      date: "2024-04-09",
      time: "10:45:00",
      callSign: "NC3456",
    },
    {
      id: 5,
      aircraftName: "Aircraft 5",
      state: "Approach",
      date: "2024-04-09",
      time: "10:50:00",
      callSign: "NC4567",
    },
    {
      id: 6,
      aircraftName: "Aircraft 6",
      state: "Landed",
      date: "2024-04-09",
      time: "10:55:00",
      callSign: "NC5678",
    },
    {
      id: 7,
      aircraftName: "Aircraft 7",
      state: "Parked",
      date: "2024-04-09",
      time: "11:00:00",
      callSign: "NC6789",
    },
    {
      id: 8,
      aircraftName: "Aircraft 8",
      state: "Take-Off",
      date: "2024-04-09",
      time: "11:05:00",
      callSign: "NC7890",
    },
    {
      id: 9,
      aircraftName: "Aircraft 9",
      state: "Airborne",
      date: "2024-04-09",
      time: "11:10:00",
      callSign: "NC8901",
    },
    {
      id: 10,
      aircraftName: "Aircraft 10",
      state: "Approach",
      date: "2024-04-09",
      time: "11:15:00",
      callSign: "NC9012",
    },
  ]);

  const [changesLogData, setChangesLogData] = useState([
    {
      id: 1,
      aircraftName: "Aircraft 1",
      state: "Landed",
      date: "2024-04-09",
      time: "10:30:00",
    },
    {
      id: 2,
      aircraftName: "Aircraft 2",
      state: "Departed",
      date: "2024-04-09",
      time: "10:35:00",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChangesLogData((prevData) => {
        const updatedData = prevData.map((item) => ({
          ...item,
          time: new Date().toLocaleTimeString(),
        }));
        return updatedData;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">
              <h3>Airport Specifications</h3>
            </div>
            <div className="card-body">
              <p>
                <strong>Location:</strong> {location}
              </p>
              <p>
                <strong>Runways:</strong> {runways}
              </p>
              <p>
                <strong>Airliner Parking Spots:</strong>{" "}
                {parkingSpots.airliners}
              </p>
              <p>
                <strong>Private Aircraft Parking Spots:</strong>{" "}
                {parkingSpots.private}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-header">
              <h3>State Change Log</h3>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Aircraft Name</th>
                    <th>State</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Call Sign</th>
                  </tr>
                </thead>
                <tbody>
                  {stateChangeLog.map((log, index) => (
                    <tr key={index}>
                      <td>{log.id}</td>
                      <td>{log.aircraftName}</td>
                      <td>{log.state}</td>
                      <td>{log.date}</td>
                      <td>{log.time}</td>
                      <td>{log.callSign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">
              <h3>Weather Data</h3>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Temperature</th>
                    <th>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  {weatherData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.date}</td>
                      <td>{data.temperature}</td>
                      <td>{data.conditions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">
              <h3>Parking Overview</h3>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Parking Spot</th>
                    <th>Type</th>
                    <th>Occupancy</th>
                  </tr>
                </thead>
                <tbody>
                  {parkingData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.spot}</td>
                      <td>{data.type}</td>
                      <td>{data.occupancy || "Vacant"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h3>Aircraft List</h3>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Aircraft</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {aircraftList.map((aircraft, index) => (
                    <tr key={index}>
                      <td>{aircraft.name}</td>
                      <td>{aircraft.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h3>Changes Log</h3>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Aircraft Name</th>
                    <th>State</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {changesLogData.map((log, index) => (
                    <tr key={index}>
                      <td>{log.id}</td>
                      <td>{log.aircraftName}</td>
                      <td>{log.state}</td>
                      <td>{log.date}</td>
                      <td>{log.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

       
      </div>
      <button onClick={logout} className="btn btn-secondary">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
