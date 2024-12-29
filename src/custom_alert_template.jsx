import React from 'react';

const CustomAlertTemplate = ({ message, options, close }) => (
  <div
    style={{
      backgroundColor: '#0d2697', // Light red background
      color: '#ffffff',          // Dark red text
      padding: '10px 15px',
      borderRadius: '5px',
      fontSize: '14px',          // Adjust text size here
      maxWidth: '300px',         // Optional: restrict alert width
      textAlign: 'center',
      marginTop : '10px'
    }}
  >
    {message}
   
  </div>
);

export default CustomAlertTemplate;
