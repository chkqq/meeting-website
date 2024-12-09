import React, { useState } from 'react';
import styles from './style.module.scss';
import Header from '../../widjets/header';
import Input from '../../ui/inputText';

const ProfileEditorPage: React.FC = () => {
    const [photos, setPhotos] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: 0,
        location: '',
        shortDesription: '',
        description: '',
        contacts: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newPhotos = Array.from(e.target.files).map(file => URL.createObjectURL(file));
            setPhotos([...photos, ...newPhotos]);
        }
    };

    const handlePhotoDelete = (index: number) => {
        setPhotos(photos.filter((_, i) => i !== index));
    };

    const handleGenderSelect = (gender: number) => {
        setFormData({ ...formData, gender });
    };

    return (
        <div className={styles.main_box}>
            <Header />
            <div className={styles.profile_editor}>
                <form className={styles.form}>
                    {/* Загрузка фото */}
                    <div className={styles.photo_upload}>
                        <div className={styles.photos}>
                            {photos.map((photo, index) => (
                                <div key={index} className={styles.photo}>
                                    <img src={photo} alt={`Uploaded ${index}`} />
                                    <button type="button" onClick={() => handlePhotoDelete(index)}>&times;</button>
                                </div>
                            ))}
                            <label htmlFor="upload" className={styles.add_photo}>
                                <span>+</span>
                                <input id="upload" type="file" multiple onChange={handlePhotoUpload} />
                            </label>
                        </div>
                    </div>
                    <div className={styles.text_info}>
                        <div className={styles.form_grid}>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Имя"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <Input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <Input
                                type="text"
                                name="age"
                                placeholder="Возраст"
                                value={formData.age}
                                onChange={handleInputChange}
                            />
                            <div className={styles.gender_selection}>
                                <button
                                    type="button"
                                    className={`${styles.gender_button} ${formData.gender === 1 ? styles.active : ''}`}
                                    onClick={() => handleGenderSelect(1)}
                                >
                                    Мужской
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.gender_button} ${formData.gender === 2 ? styles.active : ''}`}
                                    onClick={() => handleGenderSelect(2)}
                                >
                                    Женский
                                </button>
                            </div>
                            <Input
                                type="text"
                                name="location"
                                placeholder="Город"
                                value={formData.location}
                                onChange={handleInputChange}
                            />
                            <div className={styles.tooltip}>
                                <Input
                                    type="text"
                                    name="shortDesription"
                                    placeholder="Короткое описание"
                                    value={formData.shortDesription}
                                    onChange={handleInputChange}
                                />
                                <span className={styles.tooltip_text}>
                                    Напишите короткую информацию о себе, например: "Люблю путешествовать".
                                </span>
                            </div>
                        </div>
                        <div className={styles.tooltip}>
                            <textarea
                                name="description"
                                placeholder="Описание"
                                value={formData.description}
                                onChange={handleInputChange}
                                className={styles.textarea}
                            />  
                            <span className={styles.tooltip_text}>
                                Подробно расскажите о себе, чтобы другим пользователям было интересно.
                            </span>
                        </div>
                        <div className={styles.tooltip}>
                            <Input
                                type="text"
                                name="contacts"
                                placeholder="Контакты"
                                value={formData.contacts}
                                onChange={handleInputChange}
                            />
                            <span className={styles.tooltip_text}>
                                Укажите ваши контакты, чтобы вас можно было найти при совпадении.
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileEditorPage;
