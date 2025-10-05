import { useState } from 'react'

function DataForm() {
    const [data, setData] = useState({
        name: null,
        email: null,
        password: null,
        age: null,
        sex: null,
        agreement: null,
        message: null,
        country: null
    });
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("dziala")
        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            age: formData.get("age"),
            sex: formData.get("sex"),
            country: formData.get("country"),
            agreement: formData.get("agreement") === "on" ? true : false,
            message: formData.get("message")
        }
        setData(data);
    }

  return (
        <div className='form_container'>          
        <form className='form' onSubmit={handleSubmit}>
          <p>
            <label>Name</label>
            <input name="name" type="text" />
          </p>
          <p>
            <label>Email</label>
            <input name="email" type="email"/>
          </p>
          <p>
            <label>Password</label>
            <input name="password" type="password"/>
          </p>
          <p className="sex">
            <label>
            M
            <input 
              type="radio"
              name="sex"
              value="M"
            />
            </label>
            <label>
              W
            <input 
              type="radio"
              name="sex"
              value="W"
            />
            </label>
          </p>
          <p>
            <select
            name="country"
            >
              <option value={null}>Select country</option>
              <option value={"PL"}>Poland</option>
              <option value={"DE"}>Germany</option>
              <option value={"UK"}>United Kingdom</option>
            </select>
          </p>
          <p>
            <label>Age</label>
            <input name="age" type="range" min={0} max={100}/>
          </p>
          <p>
            <label>Accept our policies</label>
            <input 
              type="checkbox"
              name="agreement"
             />
          </p>
          <p>
            <textarea name="message">
            </textarea>
          </p>
        <button>Submit</button>
        </form>
        <div className='result'>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
          <p>Sex: {data.sex}</p>
          <p>Country: {data.country}</p>
          <p>Age: {data.age}</p>
          <p>{data.agreement ? "agreed" : "didn't agree"} ont our terms of policy</p>
        </div>
        </div>
  )
}

export default DataForm;