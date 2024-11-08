<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/quem_eu_sou" class="nav-link">Quem eu sou</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/que_eu_faco" class="nav-link">O que eu faco</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/hobbies" class="nav-link">Hobbies</router-link>
        </li>
      </ul>
      <div class="social-icons">
        <a href="https://www.facebook.com/" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
/* Estilos personalizados para o navbar */
.navbar {
  padding: 10px;
}

.social-icons {
  display: flex;
  align-items: center;
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
