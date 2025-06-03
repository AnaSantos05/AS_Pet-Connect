import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PetTakersList = () => {
  const { petName, type } = useParams();
  const navigate = useNavigate();
  const [petTakers, setPetTakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/pet_takers') // CORRIGIDO aqui
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar pet takers');
        return res.json();
      })
      .then((data) => {
        const filtrados = data.filter(pt =>
          pt.type.toLowerCase() === decodeURIComponent(type).toLowerCase()
        );
        setPetTakers(filtrados);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar pet takers:', err);
        setLoading(false);
      });
  }, [type]);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'white',
      padding: '2rem',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '1rem',
      marginBottom: '1rem',
      width: '300px',
      textAlign: 'left',
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    button: {
      marginTop: '1rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#2D2432',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
  };

  if (loading) return <div style={styles.container}>A carregar pet takers...</div>;

  if (petTakers.length === 0) return (
    <div style={styles.container}>
      <h2>Sem pet takers disponíveis para o serviço "{type}"</h2>
      <button style={styles.button} onClick={() => navigate(`/PetMenu/${encodeURIComponent(petName)}`)}>
        Voltar
      </button>
    </div>
  );

  return (
    <div style={styles.container}>
      <h1>Pet Takers disponíveis para: {type}</h1>
      {petTakers.map((pt, index) => (
        <div key={index} style={styles.card}>
          <p style={styles.title}>{pt.name} ({pt.age} anos)</p>
          <p><strong>Tipo:</strong> {pt.type}</p>
          <p><strong>Review:</strong> {'⭐'.repeat(pt.review)}</p>
          <p><strong>Descrição:</strong> {pt.description}</p>
          <button
            style={styles.button}
            onClick={() => navigate(`/ConfirmRequest/${petName}/${encodeURIComponent(pt.name)}`)}
          >
            Ir
          </button>
        </div>
      ))}
    </div>
  );
};

export default PetTakersList;
