import React, { useState } from 'react';
import app from '../Server/firebase.config';
import { getDatabase, ref, push } from 'firebase/database';

function AddData() {
    const [selectedTitle, setSelectedTitle] = useState(""); // State untuk menyimpan title yang dipilih
    const [namatugas, setNamatugas] = useState("");
    const [pdfLink, setPdfLink] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("#B9FF66");

    // Opsi-opsi untuk dropdown title
    const titleOptions = [
        "Fikramul Bizli - 1221050",
        "Khalidah Nur djamil",
        "Baskara",
        "M syahrul iman"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const db = getDatabase(app);
        const pdfRef = ref(db, 'pdfs');

        const newData = {
            title: selectedTitle, // Gunakan title yang dipilih dari dropdown
            namatugas: namatugas,
            pdfLink: pdfLink,
            backgroundColor: backgroundColor,
        };

        try {
            await push(pdfRef, newData);
            alert("Data berhasil disimpan!");
        } catch (error) {
            alert("Error: " + error.message);
        }

        // Reset semua state setelah submit
        setSelectedTitle("");
        setNamatugas("");
        setBackgroundColor("#B9FF66");
        setPdfLink("");
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputContainer}>
                <label>Title:</label>
                <select value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)} style={styles.input} required>
                    <option value="">Pilih Nama</option>
                    {titleOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div style={styles.inputContainer}>
                <label>Nama Tugas:</label>
                <input type="text" value={namatugas} onChange={(e) => setNamatugas(e.target.value)} style={styles.input} required />
            </div>
            <div style={styles.inputContainer}>
                <label>PDF Link</label>
                <input type="text" value={pdfLink} onChange={(e) => setPdfLink(e.target.value)} style={styles.input} required />
            </div>
            <button type="submit" style={styles.button}>Submit</button>
        </form>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid black',
        borderRadius: '10px',
        width: '400px',
        margin: '0 auto',
    },
    inputContainer: {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    label: {
        marginRight: '10px',
        minWidth: '120px',
    },
    input: {
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '250px',
    },
    inputColor: {
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '50px',
    },
    button: {
        padding: '10px',
        marginTop: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default AddData;
