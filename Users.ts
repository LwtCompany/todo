import { data } from "./Data";
import { PersonInterface } from "./interfacePerson";


export class Users{

  getAll():Array<PersonInterface>{
    return data;
  }
  get(id: number){
    return data.find(item => item.id === id)
  }

  create(person: PersonInterface): PersonInterface{
    data.push(person);
    return person;
  }

  update(id: number,  
        fullName: string,
        email: string,
        age: number,
        isStudent: boolean){
        
      const user =  data.find((item) => {
          if(item.id === id){
            item.age= age,
            item.email= email,
            item.isStudent = isStudent,
            item.fullName= fullName;
            
          }
            
        });
       return user;
  }

  delete(id: number): boolean{
   const index = data.findIndex(item => item.id === id);
   console.log({index})
   if(index !== undefined){
     data.splice(index, 1);
     return true;
   }
   return false;
  }
}