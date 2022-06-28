<script>
    import FacebookLogin from "svelte-facebook-login";
    let user = null;
  </script>
  
  <FacebookLogin
    clientId="603426324311922"
    state="1"
    redirectUri="http://localhost:3000/"
    on:success={(params) => (user = params.detail.code)}
    on:error={(error) => console.log(error)}
    let:onLogin
  >
    <button on:click={onLogin}>Facebook Login</button>
  </FacebookLogin>
  
  {#if user}
      <h1>Login Berhasil</h1>
   {/if}