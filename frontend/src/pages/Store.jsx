import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const items = [
    {
        name: 'Trela para Cães',
        price: '8.99€',
        description: 'A trela anti-puxão de treino Halti, ideal para cães que puxam.',
        image: '/images/trela.jpg',
    },
    {
        name: 'Ração para Cães',
        price: '5.99€',
        description: 'Ração para cães, ajuda o seu animal de estimação a manter o peso ideal.',
        image: '/images/racao.jpg',
    },
    {
        name: 'Coleira para Gatos',
        price: '8.95€',
        description: 'Coleira com estampado de caxemira vermelha para gatos.',
        image: '/images/coleira.jpg',
    },
    {
        name: 'Rato de Brincar',
        price: '4.99€',
        description: 'Desperte a curiosidade do seu gato com brinquedos de diferentes texturas.',
        image: '/images/rato.jpg',
    },
    {
        name: 'Colete para Cães',
        price: '24.99€',
        description: 'Colete salva-vidas para cães Summer Vibes combina funcionalidade e estilo.',
        image: '/images/colete.jpg',
    },
];

const Store = () => {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const styles = {
        container: {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: 'white',
            fontFamily: "'Lexend Peta', sans-serif",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '60px',
        },
        header: {
            width: '100%',
            padding: '2rem',
            backgroundColor: '#2D2432',
            color: 'white',
            textAlign: 'center',
        },
        title: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#FFB062',
        },
        subtitle: {
            fontSize: '1rem',
            marginTop: '0.5rem',
            color: '#fff',
            fontWeight: 'bold',
        },
        itemList: {
            width: '85%',
            maxWidth: '360px',
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
        },
        itemCard: (isHovered) => ({
            backgroundColor: isHovered ? '#5C4A7E' : '#4B3B6B',
            color: 'white',
            padding: '1rem',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            cursor: 'pointer',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Expansão no hover
            transition: 'all 0.3s ease', // Transição suave
            boxShadow: isHovered
                ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                : '0 2px 5px rgba(0, 0, 0, 0.1)', // Sombra no hover
            border: isHovered ? '2px solid #FFB062' : '2px solid transparent', // Borda highlight
        }),
        itemImage: {
            width: '150px',
            height: 'auto',
            borderRadius: '10px',
            objectFit: 'cover',
        },
        itemName: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#FFB062',
        },
        itemPrice: {
            fontSize: '1rem',
            color: '#fff',
            fontWeight: 'bold',
        },
        itemDescription: {
            fontSize: '0.9rem',
            color: '#fff',
            textAlign: 'center',
            marginTop: '0.5rem',
        },
        footer: {
            position: 'fixed',
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
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
        },
        footerIconImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>
                <div style={styles.title}>Loja Kiwoko</div>
                <div style={styles.subtitle}>Aveiro</div>
            </div>

            {/* Item List */}
            <div style={styles.itemList}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={styles.itemCard(hoveredIndex === index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => navigate('/BuyItem', { state: { item } })} // Navega para a página de detalhes do item
                    >
                        <img src={item.image} alt={item.name} style={styles.itemImage} />
                        <div style={styles.itemName}>{item.name}</div>
                        <div style={styles.itemPrice}>{item.price}</div>
                        <div style={styles.itemDescription}>{item.description}</div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div style={styles.footer}>
                <div style={styles.footerIcon}>
                    <img
                        src="/images/home.svg"
                        alt="Home"
                        style={styles.footerIconImage}
                        onClick={() => navigate('/PetTakerHome')}
                    />
                </div>
                <div style={styles.footerIcon}>
                    <img
                        src="/images/map-on.svg"
                        alt="Map"
                        style={styles.footerIconImage}
                        onClick={() => navigate('/PetTakerMap')}
                    />
                </div>
                <div style={styles.footerIcon}>
                    <img
                        src="/images/settings.svg"
                        alt="Settings"
                        style={styles.footerIconImage}
                        onClick={() => navigate('/PetTakerSettings')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Store;