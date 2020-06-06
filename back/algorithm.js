const User = require("./models/user");

async function algorithm() {
  const users = await User.find({});
  users.map( el => {
    let education = el.education.length ? 1 : 0;
    let experience = el.experience.length ? 1 : 0;
    let publicActivity = el.publicActivity.length ? 1 : 0;
    let socialNetwork = el.socialNetwork.length ? 1 : 0;

    let levelExperience = (education + experience + publicActivity + socialNetwork) / 4;
    let rating = levelExperience * el.votes.length

    await User.findByIdAndUpdate({ _id: el.id}, {rating: rating})
  });
}

exports.model = router

// let education = [ 1,2,3];
// console.log(education.length , 'education');
// let experience = 5;
// console.log(experience.length , 'experience');
// let publicActivity = 'gsdg';
// console.log(publicActivity.length , 'publicActivity');
// let socialNetwork = [1]
// console.log(socialNetwork.length , 'socialNetwork');


// let votes = ['dg','gsdgs','sdgsdg'];
// console.log(votes.length , 'votes');

// function ggg (){
//     let first = education.length ? 1 : 0;
//     let second = experience.length ? 1 : 0;
//     let third = publicActivity.length ? 1 : 0;
//     let fourth = socialNetwork.length ? 1 : 0;

//     let levelExperience = (first + second + third + fourth) / 4;
//     let rating = levelExperience * votes.length
//     return rating
// }

// console.log(ggg());
// let time = new Date(2014, 0, 30)
//  console.log(format(time));
 
