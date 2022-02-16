const drivers = ['Bobby','Sammy', 'Sally', 'Annette','Sarah','Bobby']

function findMatching(drivers, string){
    const newDrivers = drivers.filter(driversName => driversName.toLowerCase()=== string.toLowerCase())
    return newDrivers;
 }
 function fuzzyMatch(drivers, firstLetter){
    return  drivers.filter(item => item[0] === firstLetter[0])
 }
 function matchName(drivers, names) {
     return drivers.filter(function(newPeople){
         return newPeople.name === names;
     });
 }
  
 