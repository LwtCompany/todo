import { Users } from "./Users";
import { Person } from "./Person";
import { PersonInterface } from "./interfacePerson";

const person = new Person('Xusnidin Ahmedov', 'xus@gmail.com', 28, true);
const user = new Users();

// // console.log(user.getAll());
user.create(person.get());

//  user.update(  1,
//   'Jamshid Soliyev',
//  'hunter44@gmail.com',
//  24,
// true);

document.getElementById("submit").addEventListener("click", () => {
  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const userAge = document.getElementById("age").value;
  const userIsStudent = document.getElementById("isStudent").value;
  
  const person = new Person(userName, userEmail, userAge, userIsStudent);
  const user = new Users();
  console.log(userName)
// // console.log(user.getAll());
  user.create(person.get());
  resetData()
});

function resetData(): void{
  const user = new Users();
  setElements(user.getAll())
}

function setElements(data: Array<PersonInterface>){
  let content = document.getElementById("data");
  let t = 1;
  for(let i = 0; i < data.length; i++){
      let a_item = document.createElement('a');
      a_item.innerHTML =  '<div style="background-color:#eee; margin-top: 5px;">' 
      +'<div>'+ data[i].id+ '</div>' 
      + '<div>'+ data[i].fullName+ '</div>' 
      + '<div>'+ data[i].age+ '</div>'
      + '<div>'+ data[i].email+ '</div>'
      + '<div>'+ data[i].isStudent+ '</div>'
      + '<div>'+ '<button>Delete</button>'+ '</div>'
      '</div>';
      content.appendChild(a_item);
  }
}






