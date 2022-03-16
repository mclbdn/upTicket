import React, { useEffect, useState } from "react";

const SignUpPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsAreNotMatching, setPasswordsAreNotMatching] = useState(false)

  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordsAreNotMatching(true)
    } else {
      setPasswordsAreNotMatching(false);
    }
  }, [confirmPassword, password]);

  async function registerUser(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName,
        companyEmail,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <main className="signup">
      <div className="form-wrapper">
        <div className="logo-wrapper">
          <a className="logo-link" href="/">
            <span className="blue-text-span">up</span>
            <span className="pink-text-span">Ticket</span>
          </a>
        </div>
        <h3>Create your upTicket account</h3>
        <form onSubmit={registerUser}>
          <div className="label-and-input-container">
            <label htmlFor="company">Company Name</label>
            <input
              value={companyName}
              type="text"
              name="company"
              onChange={(e) => setCompanyName(e.target.value)}
              id="company"
              required
            />
          </div>
          <div className="label-and-input-container">
            <label htmlFor="email">Company Email</label>
            <input
              value={companyEmail}
              type="email"
              onChange={(e) => setCompanyEmail(e.target.value)}
              name="email"
              id="email"
              required
            />
          </div>
          <div className="label-and-input-container">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              id="password"
              required
              minLength={8}
              maxLength={16}
            />
          </div>
          <div className="label-and-input-container">
            <label htmlFor="repeat-password">Repeat Password</label>
            <input
              type="password"
              name="repeat-password"
              id="repeat-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              maxLength={16}
            />
            {passwordsAreNotMatching && <p>Passwords must be matching</p>}
          </div>
          <button>Create Account</button>
        </form>
      </div>
    </main>
  );
};

export default SignUpPage;
