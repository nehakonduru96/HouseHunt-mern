import React, { useState} from 'react';
import gif from '../home_once.gif'; // ✅ exact code to use
import logog from './logo-removebg-preview.png';

const LoginPage = () => {
  const[formType, setFormType]=useState(null);
  const handleLoginClick = () => setFormType('login');
  const handleSignupClick = () => setFormType('signup');
  const handleBackClick = () => setFormType(null);

  const styles = {
    body: {
      backgroundColor: 'white',
      fontFamily: 'Montserrat',
    },
    main: {
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      marginTop: '110px',
      marginLeft: '100px',
      marginRight: '100px',
    },
    gif: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    formDiv: {
      display: 'block',
      border: '3px #72383D solid',
      backgroundColor: '#EFE9E1',
      padding: '20px',
    },
    logo: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: '250px',
      width: '150px',
    },
    welcome: {
      padding: '3px',
      marginTop: '25px',
      color: '#322D29',
      textAlign: 'center',
    },
    button: {
      display: 'block',
      margin: 'auto',
      height: '40px',
      width: '180px',
      border: '1px #72383D solid',
      borderRadius: '20px',
      color: '#72383D',
      cursor: 'pointer',
      marginBottom: '10px',
    },
    buttonHover: {
      backgroundColor: '#72383D',
      color: 'white',
    },
    backBtn: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '20px',
      marginBottom: '10px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    label: {
      color: '#72383D',
      fontSize: 'large',
      marginTop: '10px',
    },
    input: {
      backgroundColor: 'white',
      color: 'black',
      border: '1px #72383D solid',
      height: '30px',
      width: '60%',
      marginBottom: '15px',
      padding: '5px',
      borderRadius: '5px',
      fontSize: '16px',
    },
    signupLabel: {
      color: '#72383D',
      fontSize: 'medium',
    },
    signupInput: {
      backgroundColor: 'white',
      color: 'black',
      border: '1px #72383D solid',
      height: '22px',
      width: '70%',
      marginBottom: '15px',
      padding: '5px',
      borderRadius: '5px',
      fontSize: '14px',
    },
  };

  const mainContent = (
    <div style={styles.form}>
      <h1 style={styles.welcome}>Welcome to HouseHunt</h1>
      <img src={logog} alt="HouseHunt Logo" style={styles.logo} />
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = '')}
        onClick={handleLoginClick}
      >
        Login with Email
      </button>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = '')}
        onClick={handleSignupClick}
      >
        Create New Account
      </button>
    </div>
  );

  const loginForm = (
    <div style={styles.form}>
      <button onClick={handleBackClick} style={styles.backBtn}>&larr;</button>
      <h1>Login</h1>
      <form id="login_form" style={styles.form}>
        <label style={styles.label} htmlFor="mail">Email id:</label><br />
        <input type="email" name="mail" placeholder="Your email address" style={styles.input} /><br />
        <label style={styles.label} htmlFor="password">Password:</label><br />
        <input type="password" name="password" placeholder="Your password" style={styles.input} /><br />
        <input
          type="submit"
          value="Login"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '')}
        />
      </form>
    </div>
  );

  const signupForm = (
    <div style={styles.form}>
      <button onClick={handleBackClick} style={styles.backBtn}>&larr;</button>
      <h1>Create New Account</h1>
      <form id="signin_form" style={styles.form}>
        <label style={styles.signupLabel} htmlFor="name">Name:</label><br />
        <input type="text" name="name" placeholder="Full Name" style={styles.signupInput} /><br />
        <label style={styles.signupLabel} htmlFor="contact">Contact Number:</label><br />
        <input type="number" name="contact" placeholder="xxxxx xxxxx" style={styles.signupInput} /><br />
        <label style={styles.signupLabel} htmlFor="mail">Email id:</label><br />
        <input type="email" name="mail" placeholder="Your email address" style={styles.signupInput} /><br />
        <label style={styles.signupLabel} htmlFor="password">Password:</label><br />
        <input type="password" name="password" placeholder="Create password" style={styles.signupInput} /><br />
        <input
          type="submit"
          value="Sign Up"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '')}
        />
      </form>
    </div>
  );

  return (
    <div style={styles.body}>
        <div id="main" style={styles.main}>
          <div id="tt">
            <img id="gif" src={gif} alt="Welcome Animation" style={styles.gif} />
          </div>
          <div id="form_div" style={styles.formDiv}>
            {formType === 'login' ? loginForm : formType === 'signup' ? signupForm : mainContent}
          </div>
        </div>
        )
    </div>
  );
};

export default LoginPage;
