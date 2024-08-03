import React, { useState } from 'react';
import styles from './style.module.scss';
import Button from '../../ui/button';

interface ProfileCardProps {
    profile: {
        id: number;
        name: string;
        age: number;
        gender: number;
        bio: string;
        photos: string[];
    };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % profile.photos.length);
    };

    const handlePrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + profile.photos.length) % profile.photos.length);
    };

    return (
        <div className={styles.profileCard}>
            <div className={styles.photoContainer}>
                {profile.photos.length !== 1 ? (
                    <Button onClick={handlePrevPhoto} type="text" color="#333" text=" &#10094; " />
                ) : (
                    <></>
                )}
                <img src={profile.photos[currentPhotoIndex]} alt={`${profile.name}`} className={styles.photo} />
                {profile.photos.length !== 1 ? (
                    <Button onClick={handleNextPhoto} type='text' color='#333' text=' &#10095; ' />

                ) : (
                    <></>
                )}
            </div>
            <h3>{profile.name}, {profile.age}, {profile.gender === 1 ? 'Мужчина ♂️' : 'Женщина ♀️'}</h3>
            <p>{profile.bio}</p>
        </div>
    );
};

export default ProfileCard;
