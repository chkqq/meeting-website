import React, { useState } from 'react';
import styles from './style.module.scss';
import Header from '../../widjets/header';
import Input from '../../ui/inputText';

const ProfileEditorPage: React.FC = () => {
    const [photos, setPhotos] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthDate: '',
        gender: '',
        location: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    return (
        <div className={styles.main_box}>
            <Header />
            <div className={styles.profile_editor}>
                <h1>Edit Profile</h1>
                <form className={styles.form}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
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
                        name="birthDate"
                        placeholder="Birth Date"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                    />
                    <Input
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                    />
                    <Input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleInputChange}
                    />
                    <div className={styles.photo_upload}>
                        <label>
                            Add Photos:
                            <input type="file" multiple onChange={handlePhotoUpload} />
                        </label>
                        <div className={styles.photos}>
                            {photos.map((photo, index) => (
                                <div key={index} className={styles.photo}>
                                    <img src={photo} alt={`Uploaded ${index}`} />
                                    <button type="button" onClick={() => handlePhotoDelete(index)}>Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileEditorPage;
