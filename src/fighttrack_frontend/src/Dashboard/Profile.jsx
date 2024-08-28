import React, { useEffect, useState } from 'react';

const sampleUser = {
  name: "Don",
  email: "don@example.com",
  joinDate: "2023-01-15T00:00:38.202Z",
  membershipType: "6-month",
  classesAttended: 42
};

const ProfileCard = () => {
  const [user, setUser] = useState(sampleUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('No token found');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://fighttrack-abws.onrender.com/api/auth/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
          </div>
          <div className="media-content">
            <p className="title is-4">{user.name}</p>
            <p className="subtitle is-6">{user.email}</p>
          </div>
        </div>
        <div className="content">
          <ul>
            <li><strong>Joined:</strong> {formatDate(user.joinDate)}</li>
            <li><strong>Membership Type:</strong> {user.membershipType}</li>
            <li><strong>Classes Attended:</strong> {user.classesAttended}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;