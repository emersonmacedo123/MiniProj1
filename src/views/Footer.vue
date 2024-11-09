<template>
    <footer class="footer">
      <p>Agradeço por visitar meu personal website.</p>
      <div class="social-icons">
        <a href="https://www.facebook.com/emerson.macedo.71653" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/emersonmacedo/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/emersonmacedo123" target="_blank"> <i class="fab fa-github"></i> </a>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    border-top: 1px solid #e7e7e7;
  }
  
  .social-icons {
    margin-top: 10px;
  }
  
  .social-icons a {
    margin: 0 10px;
    color: #333;
    text-decoration: none;
  }
  
  .social-icons a:hover {
    color: #0056b3; /* Muda a cor ao passar o mouse */
  }
  
  .social-icons i {
    font-size: 1.5em;
  }
  </style>
  