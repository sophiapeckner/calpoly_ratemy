const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const OrganizationModel = require("./models/Organization");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

mongoose.connect(
  "mongodb+srv://user:password1234@register.at3upxb.mongodb.net/reviewer"
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password == password) {
        res.json("success");
      } else {
        console.log(user.password);
        console.log(psw);
        res.json("wrong password");
      }
    }
  });
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// endpoint to fetch all organizations stored in MongoDB
app.get("/organizations", async (req, res) => {
  try {
    const organizations = await OrganizationModel.find();
    res.json(organizations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/updateOrganization/:orgId", async (req,res)=>{
  try{
   const orgId = req.params.orgId;
   const comment  = req.body;
   console.log(comment)
   const org=await OrganizationModel.findOneAndUpdate(
     {Id: orgId},
     {$push: { Comments: comment} },
     {new: true, useFindAndModify: false}
   );
   if (!org) {
     return res.status(404).json({ message: 'Org not found' });
   }
   return res.json(org);
  } catch{}
 });
 
 
// endpoint to route to each organizations individual page
app.get("/organizations/:id", async (req, res) => {
  try {
    const organization = await OrganizationModel.findById(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }
    res.json(organization);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

async function fetchAndInsertOrganizations() {
  try {
    // Check if the collection is empty
    // only insert data if collection is empty
    const count = await OrganizationModel.countDocuments();
    if (count === 0) {
      const organizations = await fetchOrganizationsFromAPI();
      await OrganizationModel.insertMany(organizations);
      console.log("Organizations inserted into database!");
    } else {
      console.log("Organizations collection is populated. Skipping insertion");
    }
  } catch (error) {
    console.error("Error: ", error.message);
  }
}

async function fetchOrganizationsFromAPI() {
  try {
    let response = await fetch(
      "https://now.calpoly.edu/api/discovery/search/organizations?orderBy%5B0%5D=UpperName%20asc&top=455&filter=&query=&skip=0"
    );
    let data = await response.json();
    return data["value"];
  } catch (error) {
    console.error("Error fetching organizations: ", error.message);
    return [];
  }
}

fetchAndInsertOrganizations();

app.listen(3001, () => {
  console.log("server running");
});
