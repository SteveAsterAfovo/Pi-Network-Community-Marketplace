import React from 'react';
import UserCard from '../components/UserCard';

const Profile = () => {
  const user = {
    name: 'Steve Aster Afovo',
    email: 'stevemail@example.com',
    location: 'Abomey-Calavi, Bénin',
    avatar: 'https://media.licdn.com/dms/image/D4E03AQGU2LSvl5PXYw/profile-displayphoto-shrink_800_800/0/1712150688867?e=2147483647&v=beta&t=kZXaoWNx2KckhEaE2dFZV6xZn_oO7l363yh-4vfvbl8'
  };

  return (
    <div>
      <h2>Profil</h2>
      <UserCard user={user} />
    </div>
  );
};

export default Profile;
