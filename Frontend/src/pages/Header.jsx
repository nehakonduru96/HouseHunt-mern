import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProperties } from '../services/apiService';

export default function Header() {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [properties, setProperties] = useState([]);

  const generateRandomPhoneNumber = () => {
    const randomPhoneNumber = `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    return randomPhoneNumber;
  };

  const handleFetchProperties = async () => {
    try {
      console.log(`Fetching properties for location: ${location}, type: ${type}`);
      const propertiesData = await fetchProperties(location, type);
      console.log('Properties fetched:', propertiesData);
      const propertiesWithContact = propertiesData.map(property => ({
        ...property,
        contactNumber: generateRandomPhoneNumber()
      }));
      setProperties(propertiesWithContact);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };
 const styles = {
    header: {
      padding: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      textDecoration: 'none',
    },
    logoIcon: {
      width: '24px',
      height: '24px',
    },
    logoText: {
      fontFamily: 'Lobster, cursive',
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '9999px',
      padding: '4px 20px',
      boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      marginLeft: '50px',
      maxWidth: '400px',
      width: '100%',
    },
    input: {
      padding: '4px 0',
      border: 'none',
      outline: 'none',
      color: '#333',
      background: 'transparent',
      fontSize: '1rem',
      textAlign: 'center',
      flex: '1',
    },
    separator: {
      borderLeft: '1px solid #d1d5db',
      padding: '0 4px',
    },
    searchButton: {
      backgroundColor: '#72383d',
      color: 'white',
      padding: '4px',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
    },
    searchIcon: {
      width: '28px',
      height: '28px',
      marginLeft: '8px',
    },
    userButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: '1px solid #d1d5db',
      borderRadius: '9999px',
      padding: '8px 16px',
      boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    userIcon: {
      backgroundColor: '#72383d',
      color: 'white',
      borderRadius: '9999px',
      border: '1px solid #6b7280',
      overflow: 'hidden',
      padding: '2px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '24px',
      width: '24px',
    },
    userProfileIcon: {
      width: '20px',
      height: '20px',
      position: 'relative',
      top: '1px',
    },
    subscriptionButton: {
      backgroundColor: '#72383d',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '9999px',
      textDecoration: 'none',
      fontSize: '1rem',
    },
    searchResultsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    searchResultsList: {
      listStyleType: 'none',
      padding: 0,
      width: '80%',
      maxWidth: '600px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    searchResultItem: {
      padding: '10px',
      borderBottom: '1px solid #e5e7eb',
    },
    contactNumber: {
      fontWeight: 'bold',
      color: '#72383d',
    },
  };
  return (
    <div>
      <header style={styles.header}>
        <Link to="/Homepage" style={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={styles.logoIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12L11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75V19.875c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span style={styles.logoText}>HouseHunt</span>
        </Link>

        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Location"
            style={styles.input}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div style={styles.separator}></div>
          <input
            type="text"
            placeholder="Type"
            style={styles.input}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <div style={styles.separator}></div>
          <button onClick={handleFetchProperties} style={styles.searchButton}>
            Search
          </button>
        </div>

        <Link to="/PropertyForm" style={styles.searchButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={styles.searchIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75L13.261 13.261m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>

        <Link to="/subscription" style={styles.subscriptionButton}>
          Subscription
        </Link>

        <Link to="/login" style={styles.userButton}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={styles.logoIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div style={styles.userIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={styles.userProfileIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </Link>
      </header>
      <div style={styles.searchResultsContainer}>
        {properties.length > 0 && (
          <ul style={styles.searchResultsList}>
            {properties.map((property, index) => (
              <li key={index} style={styles.searchResultItem}>
                {property.display_name}
                <div style={styles.contactNumber}>Contact: {property.contactNumber}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
