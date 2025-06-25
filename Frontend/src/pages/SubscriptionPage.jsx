import React, { useState, useEffect } from 'react';
import LoadingAnimation from '../pages/LoadingAnimation'; // Import the LoadingAnimation component

const SubscriptionPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show animation for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const plans = [
    {
      name: "Basic (Budget-Friendly)",
      price: "Access to tenant portal",
      monthlyPrice: "Rs 2000",
      duration: "/month",
      features: [
        "Submit maintenance requests online",
        "Pay rent online"
      ],
    },
    {
      name: "Plus (Convenience Plus)",
      price: "Includes Basic features",
      monthlyPrice: "Rs 3000",
      duration: "/month",
      features: [
        "Renters insurance included",
        "Credit reporting",
        "Schedule move-in/out inspections online"
      ],
    },
    {
      name: "Premium (Full-Service)",
      price: "Includes Plus features",
      monthlyPrice: "Rs 5000",
      duration: "/month",
      features: [
        "Priority customer support",
        "24/7 emergency maintenance",
        "Local mover & storage connections"
      ],
    },
  ];

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation onComplete={() => setIsLoading(false)} />
      ) : (
        <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Importing the Lobster font */}
          <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginTop: '2.5rem', marginBottom: '1.5rem', fontFamily: 'Lobster, cursive' }}>Manage Tenant Plans</h1>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            {plans.map((plan, index) => (
              <div 
                key={index} 
                style={{ 
                  margin: '1rem', 
                  padding: '3rem', // doubled the padding
                  flex: '1', 
                  backgroundColor: '#72383d', // matte black
                  color: 'white', // white text
                  borderRadius: '0.5rem', 
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                  transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s', 
                  cursor: 'pointer',
                  border: '3px solid transparent', // 1.5 times border thickness
                  height: '650px', // decreased height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.border = '3px solid #0000ff';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 255, 0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.border = '3px solid transparent';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>{plan.name}</h2>
                  <p style={{ fontSize: '5rem', marginBottom: '0', textAlign:'left' }}>
                    {plan.monthlyPrice}
                    <span style={{ fontSize: '2rem' }}>{plan.duration}</span>
                  </p>
                  <p style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: '1rem'}}>{plan.price}</p>
                  <ul style={{ marginBottom: '1rem' }}>
                    {plan.features.map((feature, i) => (
                      <li key={i} style={{ color: '#9ca3af' }}>• {feature}</li> // Slightly lighter color for the features
                    ))}
                  </ul>
                </div>
                <button 
                  style={{ 
                    backgroundColor: '#322d29', 
                    color: 'white', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '0.25rem', 
                    transition: 'background-color 0.3s', 
                    fontSize:'1.2rem'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#ac9c8d'; // Darker blue on hover
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#322d29'; // Original blue
                  }}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPage;
