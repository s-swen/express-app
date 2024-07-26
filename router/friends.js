const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{
  res.send(JSON.stringify(friends, null, 4));//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  // Update the code here
  const email = req.params.email;
  res.send(friends[email]);
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
  // Update the code here
  if (req.body.email) {
    friends[req.body.email] = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "DOB": req.body.DOB
    };
    res.send("The user" + (' ') + (req.body.firstName) + " has been added!");
  } else {
    res.send("Please provide valid user email")//This line is to be replaced with actual return value
  }
});


router.put("/:email", function(req, res) {
    // Extract email parameter from request URL
    const email = req.params.email;
    let friend = friends[email];  // Retrieve friend object associated with email

    if (friend) {  // Check if friend exists
        let DOB = req.body.DOB;
        // Add similarly for firstName
        let firstName = req.body.firstName;
        // Add similarly for lastName
        let lastName = req.body.lastName;

        // Update DOB if provided in request body
        if (DOB) {
            friend["DOB"] = DOB;
        }
        // Add similarly for firstName
        if (firstName) {
            friends["firstName"] = firstName;
        }
        // Add similarly for lastName
        if (lastName) {
            friends["lastName"] = lastName;
        }

        friends[email] = friend;  // Update friend details in 'friends' object
        res.send(`Friend with the email ${email} updated.`);
    } else {
        // Respond if friend with specified email is not found
        res.send("Unable to find friend!");
    }
});

// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;
