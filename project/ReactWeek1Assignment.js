class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(newStudent) {
    if (this.students.find((student) => student.email === newStudent.email)) {
      console.log(
        `Sorry, ${newStudent.name} is already registered for ${this.name}`
      );
    } else {
      this.students.push(newStudent);
    }
  }
}

const joe = new Student("Joe Student", "email@email.com", "WA");
const jane = new Student("Jane Student", "jane@gmail.com", "WA");
const bootcamp = new Bootcamp("React", 2);
