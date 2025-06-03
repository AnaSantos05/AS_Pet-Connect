import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; // no topo se ainda não importaste


const PetSitterAddServiceInterface = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userType = localStorage.getItem('userType');

    if (!userId || userType !== 'sitter') {
      alert('Acesso não autorizado. Apenas cuidadores podem adicionar serviços.');
      navigate('/login');
    }
  }, [navigate]);

  const [type, setType] = useState('');
  const [animals, setAnimals] = useState('');
  const [description, setDescription] = useState('');

const handleSubmit = async () => {
  const userId = localStorage.getItem('userId');
  const userType = localStorage.getItem('userType');

  
  if (!userId || userType !== 'sitter') {
    alert('Apenas cuidadores autenticados podem adicionar serviços.');
    navigate('/login');
    return;
  }

  const payload = {
    type,
    animals,
    description,
    provider_id: parseInt(userId)
  };

  try {
    const response = await fetch('http://localhost:5000/api/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (response.ok) {
      alert('Serviço adicionado com sucesso!');
      navigate('/PetSitterTakerHomeInterface');
    } else {
      alert('Erro: ' + result.error);
    }
  } catch (error) {
    alert('Erro ao comunicar com o servidor');
    console.error(error);
  }
  
};

  return (
    <div className="relative h-screen w-full bg-white overflow-hidden font-['Londrina_Solid']">
      <div className="absolute w-screen aspect-[1/1] max-h-[450px] bg-[#2D2432] rounded-b-full top-[-40%] left-0 z-0" />

      <div className="relative w-full max-w-[430px] h-full mx-auto z-10">
        <div className="absolute w-[198px] h-[205px] left-1/2 top-[54px] -translate-x-1/2 rounded-[90px] border-4 border-white bg-[#ddd] overflow-hidden">
          <img src="/images/Gino.png" alt="Profile" className="w-full h-full object-cover" />
        </div>

        <button className="absolute top-[73px] left-[11px] w-[29px] h-[29px]" onClick={() => navigate(-1)}>
          <img src="/images/cancel.svg" alt="Back" />
        </button>

        <h1 className="absolute top-[280px] left-1/2 -translate-x-1/2 text-[24px] text-[#2D2432] font-normal drop-shadow-md">
          Add a Service
        </h1>

        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Type"
          className="absolute w-[85%] h-[38px] left-[7.5%] top-[318px] px-4 rounded-[20px] border border-black bg-[rgba(20,20,20,0.08)] text-black"
        />

        <input
          type="text"
          value={animals}
          onChange={(e) => setAnimals(e.target.value)}
          placeholder="Animals"
          className="absolute w-[85%] h-[38px] left-[7.5%] top-[385px] px-4 rounded-[20px] border border-black bg-[rgba(20,20,20,0.08)] text-black"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="absolute resize-none w-[85%] left-[7.5%] top-[449px] bottom-[90px] p-4 rounded-[20px] border border-black bg-[rgba(20,20,20,0.08)] text-black"
          style={{ height: 'calc(100% - 449px - 90px)' }}
        />

        <button className="absolute w-[39px] h-[39px] right-[24px] bottom-[90px]" onClick={handleSubmit}>
          <img src="/images/confirm.svg" alt="Confirm" />
        </button>
      </div>

      <div className="absolute bottom-0 w-screen h-[71px] bg-[#2D2432] flex justify-around items-center px-8">
        <img src="/images/home-on.svg" alt="Paw" className="w-[30px] h-[30px]" />
        <img src="/images/map.svg" alt="Map" className="w-[30px] h-[30px]" />
        <img src="/images/settings.svg" alt="Settings" className="w-[30px] h-[30px]" />
      </div>
    </div>
  );
};

export default PetSitterAddServiceInterface;
