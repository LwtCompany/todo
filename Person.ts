export class Person {
  public id: number
  constructor(public fullName: string, 
              public email: string,
              public age: number, 
              public isStudent: boolean
              ){
                this.id = this.idGenerator();
              }
  private idGenerator(): number{
    return Math.ceil(Math.random() * 10000)
  }
  get(){
    return {
      id: this.id,
      age: this.age,
      email: this.email,
      isStudent : this.isStudent,
      fullName: this.fullName
    }
  }
}
