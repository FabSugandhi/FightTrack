import React, { useState, useEffect } from 'react';

const ClassEditView = ({ classId }) => {
  const [classDetails, setClassDetails] = useState(null);

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://fighttrack-abws.onrender.com/api/classes/${classId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setClassDetails(data);
      } catch (error) {
        console.error('Error fetching class details:', error);
      }
    };

    fetchClassDetails();
  }, [classId]);

  if (!classDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Class: {classDetails.title}</h2>
      {/* Add form elements for editing class details */}
      {/* Add list of attendees with remove functionality */}
    </div>
  );
};

export default ClassEditView;


//have UI
//have routes


