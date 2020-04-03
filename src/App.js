import React, {useState} from 'react';
import './App.css';
import Counter from './components/counter' 
import StudentList from './components/student-list'
import StudentAddForm from './components/student-add-form'
import EditUserForm from './components/student-update-form'


function App() {

  const initialFormState = { id: null, name: '', age: '' }

  const [ editing, setEditing ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState(initialFormState)
  const [studentsList, setStudentsList] = useState([
    {
      id: 1,
      name: "Maira",
      age: 19
    },
    {
      id: 2,
      name: "Diana",
      age: 20
    },
    {
      id: 3,
      name: "Dina",
      age: 19
    },
    {
      id: 4,
      name: "Alibek",
      age: 26
    },
  ])

  const addNewStudent = student => {
    setStudentsList([...studentsList, student])
  }
  
  const deleteStudent = id => {
    setStudentsList(studentsList.filter(student => student.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setStudentsList(studentsList.map(student => (student.id === id ? updatedUser : student)))
  }

  const editRow = student => {
		setEditing(true)
		setCurrentUser({ id: student.id, name: student.name, age: student.age })
	}

  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <Counter />
      {editing ? (<EditUserForm
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />) : (<StudentAddForm  addNewStudent={addNewStudent}/>)}
      <StudentList students={studentsList} editRow={editRow}  deleteStudent={deleteStudent}/>
    </div>
  );
}

export default App;
