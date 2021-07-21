import React from 'react';
const FanSignUp = props => {
  const {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    username,
    setUsername,
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    timezone,
    setTimezone,
    submitHandler,
    error
  } = props;
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>
              <b>Sign Up for Fans</b>
            </h2>
          </li>
          <li>
            <label htmlFor="name">First Name</label>
            <input
              type="name"
              name="name"
              value={firstname}
              id="name"
              onChange={e => setFirstname(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="lastname"
              name="lastname"
              value={lastname}
              id="lastname"
              onChange={e => setLastname(e.target.value)}
            />
          </li>{' '}
          <li>
            <label htmlFor="username">Username</label>
            <input
              type="username"
              name="username"
              value={username}
              id="username"
              onChange={e => setUsername(e.target.value)}
            />
          </li>
          {error.username && <li className="error">{error.username}</li>}
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              onChange={e => setEmail(e.target.value)}
            />
          </li>
          {error.email && <li className="error">{error.email}</li>}
          <li>
            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              name="phone"
              value={phone}
              id="phone"
              onChange={e => setPhone(e.target.value)}
            />
          </li>
          {error.phone && <li className="error">{error.phone}</li>}
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              onChange={e => setPassword(e.target.value)}
            />
          </li>
          {error.password && <li className="error">{error.password}</li>}
          <li>
            <label htmlFor="timezone">Time zone</label>
            <input
              type="timezone"
              name="timezone"
              value={timezone}
              id="timezone"
              onChange={e => setTimezone(e.target.value)}
            />
          </li>
          {error.timezone && <li className="error">{error.timezone}</li>}
          <li>
            <button className="button primary" type="submit">
              Register
            </button>
          </li>
          <li />
        </ul>
      </form>
    </div>
  );
};
export default FanSignUp;
