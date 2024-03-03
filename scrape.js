const apiUrl =
  "https://now.calpoly.edu/api/discovery/search/organizations?orderBy%5B0%5D=UpperName%20asc&top=455&filter=&query=&skip=0";
let orgList = [];

export async function getOrgs() {
  const response = await fetch(apiUrl);
  let orgs = await response.json();
  orgs = orgs["value"];
  for (let i = 0; i < orgs.length; i++) {
    orgList.push(orgs[i]["Name"]);
  }
  return orgList;
}
