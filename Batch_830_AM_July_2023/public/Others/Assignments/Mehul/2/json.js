var userDetails = {
  name: "Ken",
  lastname: "Kaneki",
  gender: "male",
  contactDetail: {
    office: "078-6484678",
    prsnl: [4865, 4684, 841346],
  },
  email:{
    office:"qgd@gmail.com",
    prsnl:["gyjg@yahoo.com","ftu@rediff.com"],
  },
  address:{
    office:{
        stateInfo:"HYD",
        buildingNo:"3A",
        country:"India",
    },
    prsnl:{
        hno:"36Z",
        stateInfo:{
            name:"KA",
            code:"KA56",
        },
    },
  },
  relation:"Friend",
  dob:{
    date:"18",
    month:"06",
  },
  socialId:{
    github:"jjkencode",
    twitter:"pokn",
  },
};

for(var systumm in userDetails){
    console.log(systumm);
    console.log(userDetails[systumm]);
}