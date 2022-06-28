<svelte:head>
  <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<div id="g_id_onload"
     data-client_id="993299729529-6b37e8shjr3du0kprehcicc9vdcbaq9d.apps.googleusercontent.com"
     data-context="signin"
     data-ux_mode="popup"
     data-callback="handleCredentialResponse"
     data-nonce=""
     data-auto_prompt="false">
</div>

<div class="g_id_signin"
     data-type="standard"
     data-shape="rectangular"
     data-theme="filled_blue"
     data-text="continue_with"
     data-size="large"
     data-logo_alignment="left"
     data-width="500">
</div>

<Facebook/>

{#if user}
<h1>Login Berhasil</h1>
{/if}

<script>
  
  let user = null;
  import { onMount } from "svelte";
  import { authenticated } from "../stores/auth";
  import { preferences } from "../stores/auth";
  import Facebook from "../lib/Facebook.svelte";

  function decodeJwtResponse(token) {
      let base64Url = token.split('.')[1]
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload)
  }

  let responsePayload;
  globalThis.handleCredentialResponse = async (response) => {

    responsePayload = decodeJwtResponse(response.credential);
      user = responsePayload.name
      console.log("ID: " + responsePayload.sub);
      console.log('Full Name: ' + responsePayload.name);
      console.log('Given Name: ' + responsePayload.given_name);
      console.log('Family Name: ' + responsePayload.family_name);
      console.log("Image URL: " + responsePayload.picture);
      console.log("Email: " + responsePayload.email);
      preferences.set("token");
  }
</script>