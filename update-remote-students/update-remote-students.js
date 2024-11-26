// Please do not change the name of this function
function updateRemoteStudents (arr) {
  // Your code here
  let newArray = arr.map((student) => {
    const updatedStudent = {...student};
    if(!updatedStudent["location"]){updatedStudent["location"] = "remote";}
    return updatedStudent;
});

  return newArray;
}

module.exports = updateRemoteStudents;