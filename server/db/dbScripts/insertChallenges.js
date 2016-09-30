const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const handlers = require('../dbQueryHandler');
const model = require('../dbmodel');
const Challenges = model.Challenges;
const Users = model.Users;
const MONGO_URI = require('../../../config').MONGO_URI;
const parseChallengeName = require('../../utils').parseChallengeName;
const addToAuthoredChallenge = require('../userHandlers').addToAuthoredChallenge;

// Below is to fix deprecated mongoose promise.
mongoose.Promise = global.Promise;
const db = mongoose.connect(MONGO_URI);
const team = ['bbtran', 'troygibb', 'hellodanali', 'lwonsower'];  

const findTeamMembers = (callback) => {
  Users.find({}, (err, userArray) => {
    console.log(userArray);
    const teamMembers = userArray.filter(user => team.indexOf(user.gitHandle) > -1);
    const teamData = teamMembers.map(member => {
      return { author: member.gitHandle, authorId: member._id }
    });
    callback(teamData);
  })
};

const addEntries = (data) => {
  let teamIndex = 0; 
  findTeamMembers((teamMemberArray) => {
    data.forEach((challenge) => {
      challenge._id = mongoose.Types.ObjectId();
      challenge.nameurl = parseChallengeName(challenge.name);
      const currentTeamMember = teamMemberArray.reduce((prev, curr) => {
        if (curr.author === challenge.author) {
          return curr; 
        }
        return prev; 
      }, {});
      challenge.author = currentTeamMember.author;
      challenge.authorId = currentTeamMember.authorId;
      const NewChallenge = new Challenges(challenge);
      NewChallenge.save((err, newData) => {
        if (err) throw err;
        console.log(newData.author, newData.authorId);
        addToAuthoredChallenge(newData._id, newData.authorId, (updatedAuthor) => {
          console.log('Added author ', updatedAuthor.gitHandle, ' to new challenge ', challenge.name);
        });
      });
      teamIndex = teamIndex === teamMemberArray.length - 1 ? 0 : teamIndex + 1;
    });
  });
};

fs.readFile(path.join(__dirname, '../challenges.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  const parsedData = JSON.parse(data);
  Challenges.remove({}, (err) => {
    if (err) throw err;
    addEntries(parsedData);
  });
});
