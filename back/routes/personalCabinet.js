const express = require("express");
const router = express.Router();
const User = require("../models/user");

// router.get("/SendDataAboutPerson/:id", async (req, res) => {
//   console.log('daaaaaaaaaaaaaaaaaa');
  
//     let {education, experience, publicActivity, socialNetwork, votes, rating } = await User.findById({_id:req.params.id})
// console.log(education, 'education');

//    data = {...{education, experience, publicActivity, socialNetwork, votes, rating}}
// console.log(data);

//   res.json({data});
// });

router.post("/getData", async (req, res) => {
  const { id, education, experience, publicActivity, socialNetwork } = req.body;
  await User.findByIdAndUpdate({ _id: id }, { 
    education: education.trim() , 
    experience: experience.trim(), 
    publicActivity: publicActivity.trim(), 
    socialNetwork: socialNetwork.trim(), 
    votes: [...[id]] })
   let users = []
    users.push(await User.findById({_id:id}))
    
    users.map(async(el) => {
      let education = el.education.length == 0  ? 0 : 1;
      let experience = el.experience[0] == '' ? 0 : 1;
      let publicActivity = el.publicActivity[0] == '' ? 0 : 1;
      let socialNetwork = el.socialNetwork[0] == '' ? 0 : 1;
      let levelExperience = (education + experience + publicActivity + socialNetwork) / 4;

      let rating = levelExperience * el.votes.length

      await User.findByIdAndUpdate({ _id: el.id}, {rating: rating})
    });
  // }

  res.json();
});

module.exports = router;
