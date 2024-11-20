<script setup>
</script>
<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/thres">Go to Thres</RouterLink>
      <RouterLink to="/text">Go to Text</RouterLink>

    </nav>
    <main>
      <RouterView />
    </main>
  </div>
  
</template>

