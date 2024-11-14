import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Cadastro() {
  

  return (
    <div className="signup-container">
      <h2>Cadastrar-se no FIFA Campeonato</h2>
      <form >
        <input type="text" name="nome" placeholder="Nome completo"  required />
        <input type="email" name="email" placeholder="E-mail"required />
        <input type="password" name="senha" placeholder="Senha"required />
        <input type="password" name="confirmarSenha" placeholder="Confirmar senha"  required />
      
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? <Link to="/">Faça login</Link>
      </p>
    </div>
  );
}

export default Cadastro;
