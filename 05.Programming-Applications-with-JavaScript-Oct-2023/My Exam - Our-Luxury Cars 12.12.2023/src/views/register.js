import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import { register } from "../api/users.js";

const registerTemplate = (onSubmit) => html` 
<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form @submit=${onSubmit} class="register-form">
      <input type="text" name="email" id="register-email" placeholder="email"/>
      <input type="password" name="password" id="register-password" placeholder="password"/>
      <input type="password" name="re-password" id="repeat-password" placeholder="repeat password"/>
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

export function registerPage(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({ email, password, ['re-password'] : repeatPass }, form) {
    if (!email || !password) {
      return alert("All fields are required!");
    }
    if (password !== repeatPass) {
      return alert("Passwords don't match.");
    }

    await register(email, password);
    form.reset();
    
    ctx.updateNav();
    ctx.page.redirect("/");
  }
}


