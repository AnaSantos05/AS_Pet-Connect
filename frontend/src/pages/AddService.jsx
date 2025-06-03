import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/londrina-solid';

const AddService = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ type: '', animals: '', age: '', description: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert('Serviço adicionado com sucesso!');
        setForm({ type: '', animals: '', age: '', description: '' });
        navigate('/PetTakerHome'); // redireciona após sucesso
      } else {
        const data = await response.json();
        alert('Erro ao adicionar o serviço: ' + (data.error || 'Erro desconhecido'));
      }
    } catch (error) {
      alert('Erro de conexão com o servidor.');
      console.error(error);
    }
  };
  const styles = {
    page: {
      fontFamily: "'Londrina Solid', sans-serif",
      background: '#fff',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
    },
    profileImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
    topSection: {
      background: '#2D2432',
      width: '100%',
      height: '180px',
      borderBottomLeftRadius: '100px',
      borderBottomRightRadius: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    backButton: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      fontSize: '1.5rem',
      color: 'white',
      cursor: 'pointer',
    },
    avatarCircle: {
      background: '#ccc',
      width: '120px',
      height: '120px',
      borderRadius: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    pawIcon: {
      width: '60px',
    },
    editIcon: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      width: '24px',
      cursor: 'pointer',
    },
    title: {
      marginTop: '0.5rem',
      fontSize: '1.5rem',
      color: '#2D2432',
    },
    form: {
      width: '80%',
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '1rem',
      color: '#2D2432',
      marginBottom: '0.2rem',
    },
    input: {
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      border: '1px solid #ccc',
      background: '#ccc',
      outline: 'none',
      fontFamily: "'Londrina Solid', sans-serif",
    },
    textarea: {
      padding: '0.5rem 1rem',
      borderRadius: '15px',
      border: '1px solid #ccc',
      background: '#ccc',
      height: '100px',
      resize: 'none',
      outline: 'none',
      fontFamily: "'Londrina Solid', sans-serif",
    },
    submitButton: {
      position: 'absolute',
      bottom: '80px',
      right: '20px',
      background: '#2D2432',
      borderRadius: '50%',
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px',
      cursor: 'pointer',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '60px',
      background: '#2D2432',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 1,
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },

    footerIcon: {
      cursor: 'pointer',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
    },

    footerIconImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.topSection}>
        <div style={styles.backButton} onClick={() => navigate(-1)}>←</div>
        <div style={styles.avatarCircle}>
        <img
          style={styles.profileImage}
          src="/images/OwnerPfp.png"
          alt="Profile"
        />
        </div>
      </div>

      <div style={styles.title}>Add a Service</div>

      <form style={styles.form} onSubmit={e => e.preventDefault()}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Type</label>
          <input type="text" name="type" value={form.type} onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Animals</label>
          <input type="text" name="animals" value={form.animals} onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Price</label>
          <input type="text" name="age" value={form.age} onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} style={styles.textarea} />
        </div>
      </form>

      <div
        style={styles.submitButton}
        onClick={handleSubmit}
      >
        ✓
      </div>

      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img
            src="/images/home-on.svg"
            alt="Home"
            style={styles.footerIconImage}
            onClick={() => navigate('/PetTakerHome')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/map.svg"
            alt="Map"
            style={styles.footerIconImage}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/settings.svg"
            alt="Settings"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerSettings')}
          />
        </div>
      </div>
    </div>
  );
};

export default AddService;
