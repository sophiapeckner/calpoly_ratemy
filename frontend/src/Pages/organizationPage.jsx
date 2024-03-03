// import "./organizationPage.module.css";
import styles from "./organizationPage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export default function Organizations() {
  const [organizations, setOrganizations] = useState([]);

  // Retrieving data from /organizations endpoints
  useEffect(() => {
    // axios.get("/organizations")
    // doesn't work because the frontend and backend run on diff ports
    axios
      .get("http://localhost:3001/organizations")
      .then((response) => {
        setOrganizations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching organizations", error);
      });
  }, []);
  // organizations is now updated!

  return (
    <>
      <h1>Organization List</h1>
      <div className={styles.orgs}>
        {organizations.map((org) => (
          <div className="col-md-4 mb-4" key={org._id}>
            <div className={styles.card}>
              <div className="card-body">
                <h5 className="card-title">{org.Name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {org.ShortName}
                </h6>
                <p className="card-text">{org.Summary}</p>
                {/* <a href="#" className="card-link">Card Link</a> */}
                <Link className="card-link" to={`/organizations/${org._id}`}>Learn More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
