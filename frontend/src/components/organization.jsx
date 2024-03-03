import "./organization.css";

const apiUrl = "http://localhost:3001/calpoly/organizations";
let orgList = [];
let response = await fetch(apiUrl);
let myjson = await response.json();
console.log(response);
let orgs = myjson["value"];
for (let i = 0; i < orgs.length; i++) {
  orgList.push(orgs[i]["Name"]);
}

export default function Organization() {
  console.log(orgList);
  return (
    <div className="org">
      <div className="orgImage">
        <img src="/logo192.png" />
      </div>
      <div className="orgInfo">
        <div className="orgTitle">Org Name</div>
        <div className="orgDesc">Description of Organization</div>
        <div className="orgRating"></div>
      </div>
    </div>
  );
}
