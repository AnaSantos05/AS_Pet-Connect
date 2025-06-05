import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const item = {
  name: 'Trela para Cães',
  price: '8.99€',
  description: 'A trela anti-puxão de treino Halti, ideal para cães que puxam.',
  image: '/images/trela.jpg',
};

const paymentMethods = [
  {
    name: 'Visa',
    logo: '/images/visa.png',
  },
  {
    name: 'Apple Pay',
    logo: '/images/applepay.png',
  },
  {
    name: 'MB WAY',
    logo: '/images/mbway.png',
  },
];

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState(null);

  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'white',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '80px',
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
    itemCard: {
      backgroundColor: '#4B3B6B',
      color: 'white',
      width: '85%',
      maxWidth: '360px',
      marginTop: '1.5rem',
      padding: '1rem',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    },
    itemImage: {
      width: '100px',
      height: 'auto',
      borderRadius: '10px',
      objectFit: 'cover',
    },
    itemName: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#FFB062',
    },
    itemPrice: {
      fontSize: '1.2rem',
      color: '#fff',
      fontWeight: 'bold',
    },
    itemDescription: {
      fontSize: '1rem',
      color: '#fff',
      textAlign: 'center',
    },
    paymentSection: {
      marginTop: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      width: '85%',
      maxWidth: '360px',
    },
    selectOneText: {
      fontSize: '1.1rem',
      color: '#2D2432',
      fontWeight: '600',
      userSelect: 'none',
      marginBottom: '1rem',
    },
    paymentMethodsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      width: '100%',
      userSelect: 'none',
    },
    paymentMethod: (isSelected) => ({
      cursor: 'pointer',
      flex: '1 1 0',
      height: '60px',
      borderRadius: '12px',
      border: isSelected ? '2px solid #FFB062' : '1.5px solid #2D2432',
      backgroundColor: isSelected ? '#FFB062' : 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px',
      transition: 'all 0.2s ease',
      transform: isSelected ? 'scale(1.05)' : 'scale(1)',
    }),
    paymentMethodImage: {
      maxHeight: '90%',
      maxWidth: '100%',
      objectFit: 'contain',
      userSelect: 'none',
    },
    confirmButton: {
      width: '100%',
      padding: '1rem',
      backgroundColor: selectedPayment ? '#2D2432' : '#ccc',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: selectedPayment ? 'pointer' : 'not-allowed',
      marginTop: '1rem',
      transition: 'background-color 0.3s ease',
    },
    selectedPaymentText: {
      fontSize: '1rem',
      color: '#2D2432',
      fontWeight: '600',
      marginTop: '1rem',
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
      zIndex: 10,
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
    footerIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    footerIconImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  const handlePayment = (method) => {
    setSelectedPayment(method.name);
  };

  const handleConfirmPayment = () => {
    if (selectedPayment) {
      // Navigate to payment success page
      navigate('/PaymentSuccessfulStore');
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.title}>Confirmar Pagamento</div>
      </div>

      {/* Item Card */}
      <div style={styles.itemCard}>
        <img src={item.image} alt={item.name} style={styles.itemImage} />
        <div style={styles.itemName}>{item.name}</div>
        <div style={styles.itemPrice}>{item.price}</div>
        <div style={styles.itemDescription}>{item.description}</div>
      </div>

      {/* Payment Section */}
      <div style={styles.paymentSection}>
        <div style={styles.selectOneText}>Selecione um método de pagamento:</div>

        <div style={styles.paymentMethodsContainer}>
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              style={styles.paymentMethod(selectedPayment === method.name)}
              onClick={() => handlePayment(method)}
            >
              <img
                src={method.logo}
                alt={method.name}
                style={styles.paymentMethodImage}
              />
            </div>
          ))}
        </div>

        {/* Show selected payment */}
        {selectedPayment && (
          <div style={styles.selectedPaymentText}>
            Método selecionado: {selectedPayment}
          </div>
        )}

        {/* Confirm Button */}
        <button
          style={styles.confirmButton}
          onClick={handleConfirmPayment}
          disabled={!selectedPayment}
        >
          {selectedPayment ? 'Confirmar Pagamento' : 'Selecione um método de pagamento'}
        </button>
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

export default PaymentConfirmation;