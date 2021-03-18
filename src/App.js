import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [instructor, setInstructor] = useState(false);
  const [student, setStudent] = useState(false);
  const [bio, setBio] = useState('');
  const [signUp, setSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubmission = { name, email, phoneNumber, instructor, student, bio, signUp };
  }

  const handleRadio = (e) => {
    if (e.target.name === 'instructor') {
      setInstructor(true)
      setStudent(false)
    } else {
      setStudent(true)
      setInstructor(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'> Name </label>
        <input onChange={(e)=> setName(e.target.value)} type="text" value={name}></input>
        <label htmlFor='email'> Email </label>
        <input onChange={(e)=> setEmail(e.target.value)} type="text" value={email}></input>
        <label htmlFor='phoneNumber'> Phone Number </label>
        <input onChange={(e)=> setPhoneNumber(e.target.value)} type="tel" value={phoneNumber}></input>
        <label htmlFor='staff'> Instructor  </label>
        <input onChange={handleRadio} name='instructor' value={instructor} type='radio' checked={instructor}></input>
        <label htmlFor='staff'> Student  </label>
        <input onChange={handleRadio} name='student' value={student} type='radio' checked={student}></input>
        <label htmlFor='bio'> Bio </label>
        <textarea value={bio}></textarea>
        <label htmlFor='signUp'> Sign-up </label>
        <input onChange= {setSignUp(!signUp)}value={signUp} type="checkbox"></input>
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}

export default App;
