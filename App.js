import React, { useState, useEffect } from 'react';
import './index.css';

function getColor(index) {
  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"]; // Example colors
  return colors[index % colors.length];
}
function getEmployeeColor(index) {
  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"]; // Example colors
  return colors[index % colors.length];
}




const Week5 = () => {
  const [students, setStudents] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          "https://valluruharshit.github.io/apis/students.json"
        );
        const data = await response.json();
        setStudents(data.slice(0, 5)); // Limit to 5 students
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(
          "https://valluruharshit.github.io/emp/employees.json"
        );
        const data = await response.json();
        setEmployees(data.slice(0, 5)); // Limit to 5 employees
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchStudentData();
    fetchEmployeeData();
  }, []);

  return (
    <div>
      <div className="week5-container1">
      <h1 style={{color:"black"}}><u>Week - 5: Create React App and Show Student List using Bootstrap Card Layout</u></h1>
  <h2><u>Student List:-</u></h2>
  <h2>Display Student info using Bootstrap Card Layout</h2>
  <div className="card-container">
    {students.map((student, index) => (
      <div className="card" key={index} style={{ backgroundColor: getColor(index) }}>
        <div className="card-body">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuV05QGtPXNBNiWFQ8EnXOkvWP9LolyQmuA&usqp=CAU"alt='card pic'></img>
          <h5 className="card-title">{student.Name}</h5>
          <p className="card-text">RollNo: {student["RollNo"]}</p>
          <p className="card-text">EmailID: {student.EmailID}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      <hr style={{colour:"black"}}></hr>
      <div className="week5-container2">
  <h2><u>Employee List:-</u></h2>
  <h2 className='mb-4'>Display Employees info using Bootstrap Card Layout</h2>
  <div className="card-container">
    {employees.map((employee, index) => (
      <div className="card" key={index} style={{ backgroundColor: getColor(index) }}>
        <div className="card-body">
          <img src="https://www.persofoto.de/apple-touch-icon-180x180.png"alt='card2'></img>
          <h5 className="card-title">{employee.name}</h5>
          <p className="card-text">Age: {employee.age}</p>
          <p className="card-text">Department: {employee.department}</p>
        </div>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default Week5;