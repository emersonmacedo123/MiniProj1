<template>
    <div>
      <h4>Nas minhas horas vagas, o que gosto de fazer, principalmente:</h4>
        <ul> 
            <li>Tocar bateria</li> 
            <li>Tempo de qualidade com minha namorada e amigos</li> 
            <li>Ler, Assistir filmes e series</li> 
            <li>Praticar esportes</li> 
            <li>Jogos online</li>
        </ul>
      
    </div>
    <img alt="Baterista photo" src="@/assets/bateria-guia-banda.jpg">
  </template>
  
  <script>
  export default {
    name: 'Hobbies'
  };
  </script>
  
  <style> 
  ul { 
    list-style-type: disc; /* Pode ser circle, square ou none */ 
    /* padding-left: 20px;  */
} 
  li { color: #4CAF50; /* Muda a cor dos itens da lista */ }
  </style>
  