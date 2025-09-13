/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { EyeIcon } from './icons';

interface AuthScreenProps {
  onAuthenticated: () => void;
  onBack: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthenticated, onBack }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'free420') {
      onAuthenticated();
    } else {
      setError('Contraseña incorrecta. Inténtalo de nuevo.');
      setPassword('');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto text-center p-8 animate-fade-in">
      <div className="bg-black/20 p-8 rounded-2xl border border-gray-700/50">
        <h2 className="text-3xl font-bold text-gray-100 mb-2 font-bowlby">
          Acceso Requerido
        </h2>
        <p className="text-gray-400 mb-8">
          Ingresa la contraseña para acceder al editor de fotos
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Contraseña"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-12"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              <EyeIcon className="w-5 h-5" />
            </button>
          </div>
          
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}
          
          <div className="space-y-3">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Ingresar
            </button>
            
            <button
              type="button"
              onClick={onBack}
              className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Volver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthScreen;