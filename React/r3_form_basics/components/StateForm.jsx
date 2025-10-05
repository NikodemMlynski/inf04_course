import { useState } from 'react'

function StateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState(null);
  const [country, setCountry] = useState(null);
  const [age, setAge] = useState(null);
  const [agreement, setAgreement] = useState(false);
  const [message, setMessage] = useState("");

  const toggleAgreement = () => {
    setAgreement(prevState => !prevState);
  }
  return (
        <div className='form_container'>          
        <form className='form'>
          <p>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </p>
          <p>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </p>
          <p>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </p>
          <p className="sex">
            {/* Sex */}
            <label>
            M
            <input 
              type="radio"
              name="sex"
              value="M"
              checked={sex === "M"}
              onChange={(e) => setSex(e.target.value)}
            />
            </label>
            <label>
              W
            <input 
              type="radio"
              name="sex"
              value="W"
              checked={sex === "W"}
              onChange={(e) => setSex(e.target.value)}
            />
            </label>
          </p>
          <p>
            <select
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            >
              <option value={null}>Select country</option>
              <option value={"PL"}>Poland</option>
              <option value={"DE"}>Germany</option>
              <option value={"UK"}>United Kingdom</option>
            </select>
          </p>
          <p>
            <label>Age</label>
            <input type="range" min={0} max={100} value={age} onChange={(e) => setAge(e.target.value)} />
          </p>
          <p>
            <label>Accept our policies</label>
            <input 
              type="checkbox"
              name="agreement"
              checked={agreement}
              onChange={toggleAgreement}
             />
          </p>
          <p>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}>
            </textarea>
          </p>
        </form>
        <div className='result'>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Sex: {sex}</p>
          <p>Country: {country}</p>
          <p>Age: {age}</p>
          <p>{agreement ? "agreed" : "didn't agree"} ont our terms of policy</p>
        </div>
        </div>
  )
}

export default StateForm;