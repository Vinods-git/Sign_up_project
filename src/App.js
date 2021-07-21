import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import FanSignUp from './FanSignUp.js';
import TalentSignUp from './TalentSignUp.js';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [timezone, setTimezone] = useState('');
  const [error, setError] = useState({});
  const validate = data => {
    if (data.phone != 10)
      setError({ ...error, phone: 'Phone no must have exactly 10 numbers' });
    if (username.length > 5)
      setError({
        ...error,
        username: 'username should only have minimum 5 charactors'
      });
    if (password.length < 8)
      setError({
        ...error,
        password: 'password should have atleast 8 characters'
      });
    if (isValidTimeZone(timezone))
      setError({ ...error, timezone: 'invalid timeZone' });
  };
  const isValidTimeZone = tz => {
    if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
      throw new Error('Time zones are not available in this environment');
    }

    try {
      Intl.DateTimeFormat(undefined, { timeZone: tz });
      return true;
    } catch (ex) {
      return false;
    }
  };

  const submitHandler = async e => {
    e.preventDefault();
    const data = {
      first_name: firstname,
      phone: phone,
      last_name: lastname,
      username: username,
      email: email,
      password: password,
      timezone: 'America/New_York',
      captcha: true
    };

    validate(data);
    await axios
      .post('https://admin.fanconvo.com/api/v3/sign-up/fan', data)
      .then(res => alert('Signed Up Successfully'))
      .catch(e => alert('Error occured'));

    console.log(error);

    setEmail('');
    setFirstname('');
    setLastname('');
    setPassword('');
    setPhone('');
    setTimezone('');
    setUsername('');
  };

  return (
    <Router>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/fanSignUp"
            >
              Fan Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/talentSignUp">
              Talent Sign up
            </Link>
          </li>
        </ul>
        <Route
          exact
          path="/fanSignUp"
          render={() => (
            <FanSignUp
              firstname={firstname}
              setFirstname={setFirstname}
              lastname={lastname}
              setLastname={setLastname}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              password={password}
              setPassword={setPassword}
              timezone={timezone}
              setTimezone={setTimezone}
              submitHandler={submitHandler}
              error={error}
            />
          )}
        />{' '}
        <Route
          exact
          path="/talentSignUp"
          render={() => (
            <TalentSignUp
              firstname={firstname}
              setFirstname={setFirstname}
              lastname={lastname}
              setLastname={setLastname}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              password={password}
              setPassword={setPassword}
              timezone={timezone}
              setTimezone={setTimezone}
              submitHandler={submitHandler}
              error={error}
            />
          )}
        />
      </div>
    </Router>
  );
}
