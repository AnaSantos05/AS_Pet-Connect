import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PetSitterTakerHomeInterface = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userType = localStorage.getItem('userType');

    if (!userId || userType !== 'sitter') {
      alert('Acesso não autorizado. Apenas cuidadores autenticados.');
      navigate('/login');
      return;
    }

    fetch(process.env.REACT_APP_API_BASE_URL + '/api/services')
      .then((res) => res.json())
      .then((data) => {
        const myServices = data.filter(service => service.provider_id === parseInt(userId));
        setServices(myServices);
      })
      .catch((err) => {
        console.error('Erro ao buscar serviços:', err);
        setServices([]);
      });
  }, [navigate]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white font-['Londrina_Solid']">
      {/* Background ellipse */}
      <div
        className="
          absolute w-[130vw] h-[35vh] 
          top-[-15%] right-1/2 translate-x-1/2
          rounded-full border-[20px] border-[#2D2432]
        "
        style={{
          background:
            'linear-gradient(180deg, #2D2432 49%, rgba(20, 20, 20, 0.74) 60%, rgba(20, 20, 20, 0.38) 78%, rgba(20, 20, 20, 0) 93%), #FFB062',
        }}
      />

      {/* Voltar */}
      <button className="absolute top-6 left-5 w-8 h-8 z-10" onClick={() => navigate(-1)}>
        <img src="/images/back.svg" alt="Back" />
      </button>

      {/* Imagem de perfil */}
      <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[140px] h-[140px] rounded-full border-4 border-white overflow-hidden bg-[#DDD]">
        <img src="/images/cat_placeholder.png" alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Título */}
      <h1 className="mt-[240px] text-center text-[24px] text-[#2D2432] drop-shadow-md">My services</h1>
      <p className="text-center text-[16px] text-[#78588A] mt-1">Glória, Aveiro</p>

      {/* Lista ou aviso */}
      {services.length === 0 ? (
        <p className="mt-10 px-6 text-center text-[18px] text-[#585858]">
          Currently, there are no services. Click on ‘+’ button to add some.
        </p>
      ) : (
        <div className="mt-10 px-6 flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-400px)]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2D243220] border border-[#2D2432] rounded-xl p-4
              w-[90%] max-w-[320px] mx-auto cursor-pointer"
              onClick={() => navigate('/ServiceRequests')}
            >
              <h2 className="text-[#2D2432] text-xl mb-1">{service.type}</h2>
              <p className="text-[#78588A] text-sm">Animals: {service.animals}</p>
              <p className="text-[#585858] text-sm mt-1">{service.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Botão adicionar */}
      <button
        className="absolute bottom-24 right-6 w-[60px] h-[60px] rounded-full bg-[#2D2432] flex items-center justify-center"
        onClick={() => navigate('/add-service')}
      >
        <img src="/images/add-symbol.svg" alt="Add" className="w-[30px]" />
      </button>

      {/* Footer */}
      <div className="absolute bottom-0 w-full h-[78px] bg-[#2D2432] flex justify-around items-center">
        <img src="/images/home-on.svg" alt="Paw" className="w-[30px]" onClick={() => navigate('/PetSitterTakerHomeInterface')} />
        <img src="/images/map.svg" alt="Map" className="w-[30px]" onClick={() => navigate('/PetTakerMap')} />
        <img src="/images/settings.svg" alt="Settings" className="w-[30px]" onClick={() => navigate('/OwnerSettings')} />
      </div>
    </div>
  );
};

export default PetSitterTakerHomeInterface;
