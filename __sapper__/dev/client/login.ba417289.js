import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, w as goto, a as authenticated, g as globals, f as element, t as text, r as space, h as claim_element, j as children, k as claim_text, c as detach_dev, u as claim_space, l as attr_dev, m as add_location, b as insert_dev, p as append_dev, x as set_input_value, y as listen_dev, z as prevent_default, n as noop, A as run_all } from './client.f4230ca7.js';

/* src\routes\login.svelte generated by Svelte v3.35.0 */

const { console: console_1 } = globals;
const file = "src\\routes\\login.svelte";

function create_fragment(ctx) {
	let div;
	let form;
	let h1;
	let t0;
	let t1;
	let input0;
	let t2;
	let input1;
	let t3;
	let button;
	let t4;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			form = element("form");
			h1 = element("h1");
			t0 = text("Please sign in");
			t1 = space();
			input0 = element("input");
			t2 = space();
			input1 = element("input");
			t3 = space();
			button = element("button");
			t4 = text("Sign in");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			form = claim_element(div_nodes, "FORM", {});
			var form_nodes = children(form);
			h1 = claim_element(form_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Please sign in");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(form_nodes);

			input0 = claim_element(form_nodes, "INPUT", {
				type: true,
				class: true,
				placeholder: true,
				required: true
			});

			t2 = claim_space(form_nodes);

			input1 = claim_element(form_nodes, "INPUT", {
				type: true,
				class: true,
				placeholder: true,
				required: true
			});

			t3 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { class: true, type: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Sign in");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "h3 mb-3 fw-normal");
			add_location(h1, file, 45, 2, 1199);
			attr_dev(input0, "type", "email");
			attr_dev(input0, "class", "form-control");
			attr_dev(input0, "placeholder", "Email");
			input0.required = true;
			add_location(input0, file, 47, 2, 1252);
			attr_dev(input1, "type", "password");
			attr_dev(input1, "class", "form-control");
			attr_dev(input1, "placeholder", "Password");
			input1.required = true;
			add_location(input1, file, 55, 2, 1369);
			attr_dev(button, "class", "w-100 btn btn-lg btn-primary");
			attr_dev(button, "type", "submit");
			add_location(button, file, 63, 2, 1495);
			add_location(form, file, 44, 0, 1156);
			attr_dev(div, "class", "form-signin");
			add_location(div, file, 43, 0, 1129);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, form);
			append_dev(form, h1);
			append_dev(h1, t0);
			append_dev(form, t1);
			append_dev(form, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append_dev(form, t2);
			append_dev(form, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append_dev(form, t3);
			append_dev(form, button);
			append_dev(button, t4);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[3]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[4]),
					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[2]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*email*/ 1 && input0.value !== /*email*/ ctx[0]) {
				set_input_value(input0, /*email*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				set_input_value(input1, /*password*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Login", slots, []);
	let email = "", password = "";

	const submit = async () => {
		var details = { email, password };
		var formBody = [];

		for (var property in details) {
			var encodedKey = encodeURIComponent(property);
			var encodedValue = encodeURIComponent(details[property]);
			formBody.push(encodedKey + "=" + encodedValue);
		}

		formBody = formBody.join("&");

		await fetch("http://localhost:4000/api/online-course/sessions/login", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: formBody
		}).then(response => response.json()).then(async responseJson => {
			if (responseJson.metadata.http_code == "200") {
				authenticated.set(responseJson.data.access_token);
				await goto("/");
			} else {
				console.log(responseJson);
			}
		}).catch(error => {
			console.error(error);
		});
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Login> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		email = this.value;
		$$invalidate(0, email);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	$$self.$capture_state = () => ({
		goto,
		authenticated,
		email,
		password,
		submit
	});

	$$self.$inject_state = $$props => {
		if ("email" in $$props) $$invalidate(0, email = $$props.email);
		if ("password" in $$props) $$invalidate(1, password = $$props.password);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [email, password, submit, input0_input_handler, input1_input_handler];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}
}

export default Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uYmE0MTcyODkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9naW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdvdG8gfSBmcm9tIFwiQHNhcHBlci9hcHAubWpzXCI7XG4gIGltcG9ydCB7IGF1dGhlbnRpY2F0ZWQgfSBmcm9tIFwiLi4vc3RvcmVzL2F1dGhcIjtcblxuICBsZXQgZW1haWwgPSBcIlwiLFxuICAgIHBhc3N3b3JkID0gXCJcIjtcblxuICBjb25zdCBzdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdmFyIGRldGFpbHMgPSB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgIH07XG5cbiAgICB2YXIgZm9ybUJvZHkgPSBbXTtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkZXRhaWxzKSB7XG4gICAgICB2YXIgZW5jb2RlZEtleSA9IGVuY29kZVVSSUNvbXBvbmVudChwcm9wZXJ0eSk7XG4gICAgICB2YXIgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KGRldGFpbHNbcHJvcGVydHldKTtcbiAgICAgIGZvcm1Cb2R5LnB1c2goZW5jb2RlZEtleSArIFwiPVwiICsgZW5jb2RlZFZhbHVlKTtcbiAgICB9XG4gICAgZm9ybUJvZHkgPSBmb3JtQm9keS5qb2luKFwiJlwiKTtcblxuICAgIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9vbmxpbmUtY291cnNlL3Nlc3Npb25zL2xvZ2luXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogZm9ybUJvZHksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlSnNvbikgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2VKc29uLm1ldGFkYXRhLmh0dHBfY29kZSA9PSBcIjIwMFwiKSB7XG4gICAgICAgICAgYXV0aGVudGljYXRlZC5zZXQocmVzcG9uc2VKc29uLmRhdGEuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICBhd2FpdCBnb3RvKCcvJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKc29uKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbjwvc2NyaXB0PlxuPGRpdiAgY2xhc3M9XCJmb3JtLXNpZ25pblwiPlxuPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXtzdWJtaXR9PlxuICA8aDEgY2xhc3M9XCJoMyBtYi0zIGZ3LW5vcm1hbFwiPlBsZWFzZSBzaWduIGluPC9oMT5cblxuICA8aW5wdXRcbiAgICBiaW5kOnZhbHVlPXtlbWFpbH1cbiAgICB0eXBlPVwiZW1haWxcIlxuICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICByZXF1aXJlZFxuICAvPlxuXG4gIDxpbnB1dFxuICAgIGJpbmQ6dmFsdWU9e3Bhc3N3b3JkfVxuICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgIHJlcXVpcmVkXG4gIC8+XG5cbiAgPGJ1dHRvbiBjbGFzcz1cInctMTAwIGJ0biBidG4tbGcgYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+U2lnbiBpbjwvYnV0dG9uPlxuPC9mb3JtPlxuPC9kaXY+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBZ0RnQixHQUFLOzs7d0NBUUwsR0FBUTs7Ozs7Ozs7OzJEQVpRLEdBQU07Ozs7Ozs7eURBSXRCLEdBQUs7c0NBQUwsR0FBSzs7OytEQVFMLEdBQVE7eUNBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FwRGxCLEtBQUssR0FBRyxFQUFFLEVBQ1osUUFBUSxHQUFHLEVBQUU7O09BRVQsTUFBTTtNQUNOLE9BQU8sS0FDVCxLQUFLLEVBQ0wsUUFBUTtNQUdOLFFBQVE7O1dBQ0gsUUFBUSxJQUFJLE9BQU87T0FDdEIsVUFBVSxHQUFHLGtCQUFrQixDQUFDLFFBQVE7T0FDeEMsWUFBWSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxRQUFRO0dBQ3RELFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxZQUFZOzs7RUFFL0MsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRzs7UUFFdEIsS0FBSyxDQUFDLHdEQUF3RDtHQUNsRSxNQUFNLEVBQUUsTUFBTTtHQUNkLE9BQU87SUFDTCxNQUFNLEVBQUUsa0JBQWtCO0lBQzFCLGNBQWMsRUFBRSxtQ0FBbUM7O0dBRXJELElBQUksRUFBRSxRQUFRO0tBRWIsSUFBSSxDQUFFLFFBQVEsSUFBSyxRQUFRLENBQUMsSUFBSSxJQUNoQyxJQUFJLE9BQVEsWUFBWTtPQUNuQixZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxLQUFLO0lBQzFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZO1VBQzFDLElBQUksQ0FBQyxHQUFHOztJQUVkLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTs7S0FHM0IsS0FBSyxDQUFFLEtBQUs7R0FDWCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUs7Ozs7Ozs7Ozs7O0VBU1gsS0FBSzs7Ozs7RUFRTCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
