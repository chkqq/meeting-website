import React, { useState } from 'react';
import styles from './style.module.scss';
import Button from '../../ui/button';

interface ProfileCardProps {
    profile: {
        id: number;
        name: string;
        age: number;
        gender: number;
        location: string;
        shortDescription: string;
        description: string;
        photos: string[];
    };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % profile.photos.length);
    };

    const handlePrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + profile.photos.length) % profile.photos.length);
    };

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`${styles.profileCard} ${isFlipped ? styles.flipped : ''}`}>
            {/* Front Side */}
            {!isFlipped && (
                <div className={styles.front}>
                    <div className={styles.photoContainer}>
                        {profile.photos.length > 1 && (
                            <Button onClick={handlePrevPhoto} type="text" color="#333" text="&#10094;" />
                        )}
                        <img src={profile.photos[currentPhotoIndex]} alt={`${profile.name}`} className={styles.photo} />
                        {profile.photos.length > 1 && (
                            <Button onClick={handleNextPhoto} type="text" color="#333" text="&#10095;" />
                        )}
                    </div>
                    <h3>
                        {profile.name}, {profile.location}, {profile.age}, {profile.gender === 1 ? 'Мужчина ♂️' : 'Женщина ♀️'}
                    </h3>
                    <p>{profile.shortDescription}</p>
                    <Button onClick={toggleFlip} type="text" color="#333" text="Узнать подробнее" />
                </div>
            )}
            {/* Back Side */}
            {isFlipped && (
                <div className={styles.back}>
                    <div className={styles.allInfo}>
                        <div className={styles.photoAndInfo}>
                            <img src={profile.photos[0]} alt="Profile" className={styles.smallPhoto} />
                            <div className={styles.details}>
                                <p><strong>Имя:</strong> {profile.name}</p>
                                <p><strong>Город:</strong> {profile.location}</p>
                                <p><strong>Возраст:</strong> {profile.age}</p>
                                <p><strong>Пол:</strong> {profile.gender === 1 ? 'Мужчина ♂️' : 'Женщина ♀️'}</p>
                            </div>
                        </div>
                        <p className={styles.description}>{profile.description}</p>
                    </div>
                    <div className={styles.button}>
                        <Button onClick={toggleFlip} type="text" color="#333" text="Назад" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileCard;
