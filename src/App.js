import { useForm, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [staff, setStaff] = useState('');
  const [bio, setBio] = useState('');
  const [signUp, setSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubmission = { name, email, phoneNumber, staff, bio, signUp };

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
        <label htmlFor='staff'> Staff </label>
        <input value={staff}></input>
        <label htmlFor='bio'> Bio </label>
        <textarea value={bio}></textarea>
        <label htmlFor='signUp'> Sign-up </label>
        <input value={signUp} type="checkbox"></input>
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}

export default App;
