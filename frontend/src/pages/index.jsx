import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FunctionContext } from '../contexts/FunctionContext';

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    background: 'white',
    overflow: 'hidden',
  },
  footerText: {
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'absolute',
    color: 'black',
    fontSize: 12,
    fontFamily: 'Lexend Peta',
    fontWeight: 400,
    wordWrap: 'break-word',
  },
  lanContainer: {
    width: 43,
    height: 43,
    bottom: '5%',
    right: '5%',
    position: 'absolute',
    overflow: 'hidden',
  },
  lanImage: {
    width: 43,
    height: 43,
    position: 'absolute',
    overflow: 'hidden',
  },
};

const Page = () => {
  const navigate = useNavigate();
  const { setSelectedFunction } = useContext(FunctionContext);

  const handleOwnerClick = () => {
    setSelectedFunction('X');
    navigate('/MenuPet');
  };

  const handleCaretakerClick = () => {
    setSelectedFunction('Y');
    navigate('/MenuPet');
  };

  return (
    <div style={styles.container}>
      {/* Gradiente do topo */}
      <div
        className="absolute
        rounded-full border-20 
        border-[#2D2432] 
        w-[130vw]
        translate-x-1/2 right-1/2
        md:w-[110%]
        2xl:w-[125%]"
        style={{
          height: '70vh',
          top: '-30%',
          background:
            'linear-gradient(180deg, #2D2432 49%, rgba(20.19, 20.19, 20.19, 0.74) 60%, rgba(20.19, 20.19, 20.19, 0.38) 78%, rgba(20.19, 20.19, 20.19, 0) 93%), #FFB062',
          borderRadius: '50%',
          border: '20px #2D2432 solid',
        }}
      />

      {/* Logo */}
      <img
        src="images/logo.png"
        alt="Logo grande"
        className="absolute top-[26%] left-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 md:w-[25%]"
      />

      {/* Texto footer */}
      <div style={styles.footerText}>By Hotel Bicho Solto</div>

      {/* Opções */}
      <div className="absolute top-[63%] left-1/2 -translate-x-1/2 flex gap-4 sm:gap-10 items-center justify-center">
        {/* Pet Owner */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleOwnerClick}
        >
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[134px] md:h-[131px] rounded-full border-4 border-[#2D2432] bg-gradient-to-b from-[#FFB062A0] to-[#FFB062] flex items-center justify-center">
            <img
              src="images/pet_owner.png"
              alt="Owner"
              className="w-[40px] sm:w-[45px] md:w-[50px]"
            />
          </div>
          <div
            className="mt-2 text-center text-[#2D2432]"
            style={{
              fontFamily: 'Londrina Solid',
              fontSize: 16,
              lineHeight: '1.2',
            }}
          >
            Pet <br /> Owner
          </div>
        </div>

        {/* Pet Care-Taker */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleCaretakerClick}
        >
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[134px] md:h-[131px] rounded-full border-4 border-[#2D2432] bg-gradient-to-b from-[#FFB062A0] to-[#FFB062] flex items-center justify-center">
            <img
              src="images/pet_caretaker.png"
              alt="Caretaker"
              className="w-[40px] sm:w-[45px] md:w-[50px]"
            />
          </div>
          <div
            className="mt-2 text-center text-[#2D2432]"
            style={{
              fontFamily: 'Londrina Solid',
              fontSize: 16,
              lineHeight: '1.2',
            }}
          >
            Pet <br /> Care-Taker
          </div>
        </div>
      </div>

      {/* Bandeira */}
      <img
        style={{ ...styles.lanImage, ...styles.lanContainer }}
        src="images/uk-flag.png"
        alt="UK Flag"
      />
    </div>
  );
};

export default Page;
