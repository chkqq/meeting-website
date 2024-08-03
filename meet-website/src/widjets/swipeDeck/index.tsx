import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import ProfileCard from '../../featured/profileCard';
import profilesData from '../../dataBase/ancets.json';

const SwipeDeck: React.FC = () => {
    const [profiles, setProfiles] = useState(profilesData);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            // Обработать дизлайк
            console.log(`Disliked ${profiles[currentIndex].name}`);
        } else {
            // Обработать лайк
            console.log(`Liked ${profiles[currentIndex].name}`);
        }

        // Переход к следующей анкете
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            handleSwipe('left');
        } else if (event.key === 'ArrowRight') {
            handleSwipe('right');
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex]);

    if (currentIndex >= profiles.length) {
        return <div className={styles.no_more_profiles}>Анкеты закончились</div>;
    }

    return (
        <div className={styles.swipe_deck}>
            <button className={styles.swipe_deck_button} onClick={() => handleSwipe('left')}>👎</button>
            <ProfileCard profile={profiles[currentIndex]} />
            <button className={styles.swipe_deck_button} onClick={() => handleSwipe('right')}>❤️</button>
        </div>
    );
};

export default SwipeDeck;
