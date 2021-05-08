var Hospital =
{
    about:{
       founderName:"raj",
        startedYear:"03-09-1990",
        location:"Tenkasi",
        RegNo:1234556,
   },

   employees:{
       doctor:{
           permanent:{
               name:"Sri",
               doctorId:12456,
               dob:"20-10-1991",
               salary:80000,
               experienceYrs:20,
               address:{
                street:20,
                city:"tirunelveli",
                state:"tamilnadu",
               },
           },
         consulting:{
               name:"vishal",
               doctorId:12378156,
               dob:"15-02-1990",
               salary:50000,
               address:{
                 street:29,
                 city:"chennai",
                 state:"tamilnadu",
               },
        
           },
       },

       nurse:{
            name:"abc",
            age:34,
            dob:"18-01-1994",
            salary:23000,
       },

       driver:{
          name:"xyz", 
          age:40,
          dob:"10-06-1990",
          salary:14000,
       },
   },

   patients:{
        inPatients:{
            name:"ajay",
            age:23,
            bloodgroup:"A+",
            address:{
                street:13,
                city:"madurai"
            },

            admittedDetails:{
                date:"10/04/2021",
                room:{
                    roomNo:400,
                    roomtype:"AC",
                    charges:8000,
                }
            },

            relativeDetails:{
                name:"qwrt",
                roomNo:400,
                age:30,
                contactnum:123567890,
            }
        },

        outPatients:{
            name:"accx",
            age:78,
            disease:"corona",
            bloodgroup:"B+",

        }
   },

};


