import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../FirebaseConfigs/firebaseCongi';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const initialcartvalue = 0;
        console.log(user);

        addDoc(collection(db, 'users'), {
          username: username,
          email: email,
          password: password,
          phonenumber: phonenumber,
          cart: initialcartvalue,
          address: address,
          uid: user.uid,
        })
          .then(() => {
            setSuccessMsg(
              'New Usser added Successfully, You will now be automatically redirected to login page'
            );
            setUserName('');
            setPhoneNumber('');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(() => {
              setSuccessMsg('');
              navigate('/login');
            }, 4000);
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          setErrorMsg('Please fill all required fields');
        }
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          setErrorMsg('User already exists');
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <p>Crate Account</p>
          {successMsg && (
            <>
              <div className="error-msg">{errorMsg}</div>
            </>
          )}
          <label>Your Name</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="First and last name"
          ></input>

          <label>Mobile Number</label>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="number"
            placeholder="Mobile Number"
          ></input>

          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          ></input>

          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          ></input>

          <label>Address</label>
          <textarea
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          ></textarea>
          <button type="submit"> Signup </button>

          <div>
            <span>Already have an account?</span>
            <Link to="/login"> Sing in </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
