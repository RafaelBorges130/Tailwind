import { useState } from 'react';
import '../css/App.css';
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='p-4 space-y-8 flex flex-col min-h-screen'>
      <div className='flex-grow'>
        {/* 1: Botão estilizado */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Clique aqui
        </button>

        {/* 2: Layout Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded">Coluna 1</div>
          <div className="bg-gray-300 p-4 rounded">Coluna 2</div>
        </div>

        {/* 3: Formulário de Contato */}
        <form className="space-y-4">
          <input className="border p-2 w-full rounded" type="text" placeholder="Nome" />
          <input className="border p-2 w-full rounded" type="email" placeholder="E-mail" />
          <textarea className="border p-2 w-full rounded" placeholder="Mensagem"></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Enviar
          </button>
        </form>

        {/* 4: Cartão de Perfil */}
        <div className="bg-white shadow-lg p-4 rounded-lg text-center">
          <img
            className="w-20 h-20 mx-auto rounded-full"
            src="https://via.placeholder.com/150"
            alt="Perfil"
          />
          <h3 className="text-lg font-semibold mt-2">Usuário</h3>
          <p className="text-gray-600">Descrição do usuário.</p>
        </div>

        {/* 6: Input com Ícone */}
        <div className="flex items-center border rounded p-2 w-full">
          <input className="outline-none w-full" type="text" placeholder="Pesquisar..." />
        </div>

        {/* 7: Caixa de Alerta */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
          <p>Mensagem de alerta!</p>
        </div>
      </div>

      {/* 5: Footer Responsivo */}
      <footer className="text-center p-4 bg-gray-800 text-white hover:bg-green-300 hover:text-black mt-auto">
        Rodapé Responsivo
      </footer>
    </div>
  );
}

export default App;
