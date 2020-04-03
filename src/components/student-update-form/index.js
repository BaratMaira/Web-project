import React, { useState} from 'react'

const EditUserForm = props => {
  const [formData, setFormData] = useState(props.currentUser)


  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

  const updateUser = () => {
    props.updateUser(formData.id, formData)
}
  return (
    <div>
        <input name="id" value={formData.id} onChange={handleInputChange} placeholder="Enter new id"/>
        <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter new name"/>
        <input name="age" value={formData.age} onChange={handleInputChange} placeholder="Enter new age"/>
        <button onClick = {updateUser}>Update</button>
        <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
    </div>
)
}

export default EditUserForm