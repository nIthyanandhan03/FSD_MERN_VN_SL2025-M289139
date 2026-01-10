import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [students, setStudents] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newStudent = {
      name,
      email,
      city
    }

    setStudents([...students, newStudent])

    // clear inputs
    setName("")
    setEmail("")
    setCity("")
  }

  return (
    <div className="container mt-3">
      <h1>Student Form</h1>

      {/* FORM */}
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex align-items-center">
          <label className="me-2" style={{ width: "90px" }}>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label className="me-2" style={{ width: "90px" }}>Email Id:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label className="me-2" style={{ width: "90px" }}>City:</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="text-center">
        <button className="btn btn-outline-secondary border-20" >Submit</button>
        </div>
      </form>

      {/* TABLE */}
      <table className="table table-bordered mt-4 w-100">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
  {students.length === 0 ? (
    <tr>
      <td colSpan="4" className="text-center text-muted">
        No data available
      </td>
    </tr>
  ) : (
    students.map((stu, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{stu.name}</td>
        <td>{stu.email}</td>
        <td>{stu.city}</td>
      </tr>
    ))
  )}
</tbody>

      </table>
    </div>
  )
}

export default App
