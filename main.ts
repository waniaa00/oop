#! /usr/bin/env node

import inquirer from "inquirer";

class Student {
    name: string 
    constructor(n:string){
        this.name=n 
    }
}
class Person{
    students: Student[]= []
    addStudent(obj: Student){
        this.students.push(obj)
    }
}
const persons = new Person()
const programStart = async (persons: Person)=> {
    do{
    console.log("Welcome")
    const ans = await inquirer.prompt({
        name: "select",
        type : "list",
        message: "Whom would you like to interact with?",
        choices: ["staff", "students","exit"]
    })
    if(ans.select === "staff"){
        console.log("You approached the staff romm. PLease feel free to resolve any queries.");

    }
    else if(ans.select === "students"){
        const ans = await inquirer.prompt({
            name : "student",
            type: "input",
            message :"Enter the student's name you wish you engage with:"
        })
        const student = persons.students.find( val => val.name === ans.student)
        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`Hello  i am ${name.name}. Nice to meet you!`);
            console.log("New student added");
            console.log("Current student list:");
            console.log(persons.students);
            
        }else {
            console.log(`Hello i am ${student.name}. Nice to see you again!`);
            console.log("Existing students list:");
            console.log(persons.students);
        }
    
    } else if (ans.select === "exit"){
        console.log("Exiting the program...");
        process.exit()
        
    }
} while(true)
}
programStart(persons)