import React from 'react'

const sampleUser = {
  name: "Don",
  email: "don@example.com",
  joinDate: "2023-01-15",
  membershipType: "6-month",
  classesAttended: 42
};

const ProfileCard = ({ user = sampleUser }) => {
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
            <li><strong>Joined:</strong> {user.joinDate}</li>
            <li><strong>Membership Type:</strong> {user.membershipType}</li>
            <li><strong>Classes Attended:</strong> {user.classesAttended}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
