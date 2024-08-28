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
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

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

  const handleEdit = () => {
    setEditedName(user.name);
    setEditedEmail(user.email);
    setIsEditing(true);
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found');
      return;
    }

    try {
      const response = await fetch('https://fighttrack-abws.onrender.com/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: editedName,
          email: editedEmail,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
      setIsEditing(false);
    } catch (error) {
      setError(error.message);
    }
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
      <div className="card-footer" style={{ border: 'none' }}>
        <button className="button" style={{ borderWidth: '3px', borderStyle: 'solid' }} onClick={handleEdit}>Edit Profile</button>
      </div>

      {isEditing && (
        <div className="modal is-active">
          <div className="modal-background" onClick={() => setIsEditing(false)}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Edit Profile</p>
              <button className="delete" aria-label="close" onClick={() => setIsEditing(false)}></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                  />
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={handleSave}>Save changes</button>
              <button className="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;