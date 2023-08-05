import React from 'react';
import './Header.css';
import logo from "./../images/logo.jpg";

const Header = () => {
  return (
    <header className='header'>
      <div className='left-header'>
        <img src={logo} alt="Logo" className='logo' />
      </div>
      <div className='middle'>
        <h1>voting app</h1>
      </div>
      <div className='right-header'>
        <button className='button'>Options</button>
      </div>
    </header>
  );
};

// const Header = () => {
//   return (
//     <header style={styles.header}>
//       <div style={styles.left}>
//         <img src={logo} alt="Logo" style={styles.logo} />
//       </div>
//       <div style={styles.middle}>
//         <h1 style={styles.appName}>voting app</h1>
//       </div>
//       <div style={styles.right}>
//         <button style={styles.optionsButton}>Options</button>
//       </div>
//     </header>
//   );
// };

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px',
//     backgroundColor: '#f0f0f0',
//   },
//   left: {
//     flex: 1,
//   },
//   middle: {
//     flex: 2,
//     textAlign: 'center',
//   },
//   right: {
//     flex: 1,
//     textAlign: 'right',
//   },
//   logo: {
//     height: '50px',
//     width: 'auto',
//   },
//   appName: {
//     margin: 0,
//     fontSize: '24px',
//   },
//   optionsButton: {
//     padding: '8px 12px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

export default Header;
