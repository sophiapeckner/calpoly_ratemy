import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Organization() {
  const [organization, setOrganization] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/organizations/${id}`)
      .then((response) => {
        console.log("DATA", response.data);
        setOrganization(response.data);
      })
      .catch((error) => {
        console.error("Error fetching organization by id: ", error);
      });
  }, [id]);

  if (organization === null) return <>Loading...</>;

  return (
    <div>
      <h1>{organization.Name}</h1>
    </div>
  );
}
