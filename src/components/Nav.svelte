<script>
  import { authenticated } from "../stores/auth";
  import { goto } from "@sapper/app.mjs";

  let auth = "";

  authenticated.subscribe((a) => (auth = a));

  const logout = async () => {
    authenticated.subscribe(async (value) => {
      if (value) {
        await fetch("http://localhost:4000/api/online-course/sessions/logout", {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `${value}`,
          },
        })
          .then((response) => response.json())
          .then(async (responseJson) => {
            if (responseJson.metadata.http_code == "200") {
              authenticated.set('');
              await goto("/login");
              auth = '';
            }
          })
          .catch((error) => {
            console.error(error);
            token = "";
          });
      }
    });
  };
</script>

<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    <a href="/" class="navbar-brand">Home</a>

    <div>
      {#if auth != ""}
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#" class="nav-link" on:click={logout}>Logout</a>
          </li>
        </ul>
      {:else}
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a href="/login" class="nav-link">Login</a>
          </li>
          <li class="nav-item">
            <a href="/register" class="nav-link">Register</a>
          </li>
        </ul>
      {/if}
    </div>
  </div>
</nav>
