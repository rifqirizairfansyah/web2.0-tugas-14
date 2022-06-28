import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, A as create_slot, v as validate_slots, B as createEventDispatcher, C as update_slot_base, D as get_all_dirty_from_scope, E as get_slot_changes, F as transition_in, G as transition_out, f as element, t as text, h as claim_element, j as children, k as claim_text, c as detach_dev, m as add_location, b as insert_hydration_dev, p as append_hydration_dev, H as create_component, r as space, e as empty, I as claim_component, u as claim_space, J as mount_component, K as destroy_component, x as listen_dev, L as is_function, M as preferences, o as onMount, a as authenticated, N as query_selector_all, O as src_url_equal, l as attr_dev, n as noop } from './client.1aee1a3b.js';

/* node_modules\svelte-facebook-login\dist\FacebookLogin.svelte generated by Svelte v3.48.0 */

const { Error: Error_1 } = globals;
const get_default_slot_changes = dirty => ({});
const get_default_slot_context = ctx => ({ onLogin: /*onLogin*/ ctx[0] });

function create_fragment$2(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], get_default_slot_context);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[7],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[7])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[7], dirty, get_default_slot_changes),
						get_default_slot_context
					);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const urlFacebook = "https://www.facebook.com/v5.0/dialog/oauth";

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('FacebookLogin', slots, ['default']);
	let { clientId } = $$props;
	let { state } = $$props;
	let { redirectUri } = $$props;
	let { responseType = undefined } = $$props;
	let { scope = undefined } = $$props;
	let { pollInterval = 500 } = $$props;
	const dispatch = createEventDispatcher();
	let interval = 0;
	let popupWindow;

	const convertQueryParams = url => {
		const query = url.substr(1);
		const result = {};

		query.split("&").forEach(param => {
			const item = param.split("=");
			result[item[0]] = decodeURIComponent(item[1]);
		});

		return result;
	};

	const close = () => {
		if (interval) {
			window.clearInterval(interval);
			interval = null;
		}

		if (popupWindow) {
			popupWindow.close();
		}
	};

	// SvelteGithubLogin based
	const poll = () => {
		interval = window.setInterval(
			() => {
				try {
					if (!popupWindow || popupWindow.closed !== false) {
						close();
						dispatch("error", new Error("The popup was closed"));
						return;
					}

					if (popupWindow.location.href === urlFacebook || popupWindow.location.pathname === "blank") {
						return;
					}

					dispatch("success", convertQueryParams(popupWindow.location.search));
					close();
				} catch(error) {
					
				} // error
			},
			pollInterval
		);
	};

	const onLogin = () => {
		let urlParams = `client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}`;

		if (responseType) {
			urlParams += `&response_type=${responseType}`;
		}

		if (scope) {
			urlParams += `&scope=${scope}`;
		}

		popupWindow = window.open(`${urlFacebook}?${urlParams}`, "facebook-oauth", "");
		dispatch("request");
		poll();
	};

	const writable_props = ['clientId', 'state', 'redirectUri', 'responseType', 'scope', 'pollInterval'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<FacebookLogin> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('clientId' in $$props) $$invalidate(1, clientId = $$props.clientId);
		if ('state' in $$props) $$invalidate(2, state = $$props.state);
		if ('redirectUri' in $$props) $$invalidate(3, redirectUri = $$props.redirectUri);
		if ('responseType' in $$props) $$invalidate(4, responseType = $$props.responseType);
		if ('scope' in $$props) $$invalidate(5, scope = $$props.scope);
		if ('pollInterval' in $$props) $$invalidate(6, pollInterval = $$props.pollInterval);
		if ('$$scope' in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		clientId,
		state,
		redirectUri,
		responseType,
		scope,
		pollInterval,
		dispatch,
		urlFacebook,
		interval,
		popupWindow,
		convertQueryParams,
		close,
		poll,
		onLogin
	});

	$$self.$inject_state = $$props => {
		if ('clientId' in $$props) $$invalidate(1, clientId = $$props.clientId);
		if ('state' in $$props) $$invalidate(2, state = $$props.state);
		if ('redirectUri' in $$props) $$invalidate(3, redirectUri = $$props.redirectUri);
		if ('responseType' in $$props) $$invalidate(4, responseType = $$props.responseType);
		if ('scope' in $$props) $$invalidate(5, scope = $$props.scope);
		if ('pollInterval' in $$props) $$invalidate(6, pollInterval = $$props.pollInterval);
		if ('interval' in $$props) interval = $$props.interval;
		if ('popupWindow' in $$props) popupWindow = $$props.popupWindow;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		onLogin,
		clientId,
		state,
		redirectUri,
		responseType,
		scope,
		pollInterval,
		$$scope,
		slots
	];
}

class FacebookLogin extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
			clientId: 1,
			state: 2,
			redirectUri: 3,
			responseType: 4,
			scope: 5,
			pollInterval: 6
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FacebookLogin",
			options,
			id: create_fragment$2.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*clientId*/ ctx[1] === undefined && !('clientId' in props)) {
			console.warn("<FacebookLogin> was created without expected prop 'clientId'");
		}

		if (/*state*/ ctx[2] === undefined && !('state' in props)) {
			console.warn("<FacebookLogin> was created without expected prop 'state'");
		}

		if (/*redirectUri*/ ctx[3] === undefined && !('redirectUri' in props)) {
			console.warn("<FacebookLogin> was created without expected prop 'redirectUri'");
		}
	}

	get clientId() {
		throw new Error_1("<FacebookLogin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set clientId(value) {
		throw new Error_1("<FacebookLogin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get state() {
		throw new Error_1("<FacebookLogin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set state(value) {
		throw new Error_1("<FacebookLogin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get redirectUri() {
		throw new Error_1("<FacebookLogin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set redirectUri(value) {
		throw new Error_1("<FacebookLogin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get responseType() {
		throw new Error_1("<FacebookLogin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set responseType(value) {
		throw new Error_1("<FacebookLogin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get scope() {
		throw new Error_1("<FacebookLogin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set scope(value) {
		throw new Error_1("<FacebookLogin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get pollInterval() {
		throw new Error_1("<FacebookLogin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set pollInterval(value) {
		throw new Error_1("<FacebookLogin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\lib\Facebook.svelte generated by Svelte v3.48.0 */

const { console: console_1$1 } = globals;
const file$1 = "src\\lib\\Facebook.svelte";

// (6:2) <FacebookLogin      clientId="603426324311922"      state="1"      redirectUri="http://localhost:3000/"      on:success={(params) => (user = params.detail.code)}      on:error={(error) => console.log(error)}      let:onLogin    >
function create_default_slot(ctx) {
	let button;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text("Facebook Login");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			t = claim_text(button_nodes, "Facebook Login");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(button, file$1, 13, 4, 342);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, button, anchor);
			append_hydration_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(
					button,
					"click",
					function () {
						if (is_function(/*onLogin*/ ctx[3])) /*onLogin*/ ctx[3].apply(this, arguments);
					},
					false,
					false,
					false
				);

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(6:2) <FacebookLogin      clientId=\\\"603426324311922\\\"      state=\\\"1\\\"      redirectUri=\\\"http://localhost:3000/\\\"      on:success={(params) => (user = params.detail.code)}      on:error={(error) => console.log(error)}      let:onLogin    >",
		ctx
	});

	return block;
}

// (17:2) {#if user}
function create_if_block(ctx) {
	let h1;
	let t;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text("Login Berhasil");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "Login Berhasil");
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$1, 17, 6, 438);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(17:2) {#if user}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let facebooklogin;
	let t;
	let if_block_anchor;
	let current;

	facebooklogin = new FacebookLogin({
			props: {
				clientId: "603426324311922",
				state: "1",
				redirectUri: "http://localhost:3000/",
				$$slots: {
					default: [
						create_default_slot,
						({ onLogin }) => ({ 3: onLogin }),
						({ onLogin }) => onLogin ? 8 : 0
					]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	facebooklogin.$on("success", /*success_handler*/ ctx[1]);
	facebooklogin.$on("error", /*error_handler*/ ctx[2]);
	let if_block = /*user*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			create_component(facebooklogin.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(facebooklogin.$$.fragment, nodes);
			t = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(facebooklogin, target, anchor);
			insert_hydration_dev(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_hydration_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const facebooklogin_changes = {};

			if (dirty & /*$$scope, onLogin*/ 24) {
				facebooklogin_changes.$$scope = { dirty, ctx };
			}

			facebooklogin.$set(facebooklogin_changes);

			if (/*user*/ ctx[0]) {
				if (if_block) ; else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(facebooklogin.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(facebooklogin.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(facebooklogin, detaching);
			if (detaching) detach_dev(t);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Facebook', slots, []);
	let user = null;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1$1.warn(`<Facebook> was created with unknown prop '${key}'`);
	});

	const success_handler = params => $$invalidate(0, user = params.detail.code);
	const error_handler = error => console.log(error);
	$$self.$capture_state = () => ({ FacebookLogin, user });

	$$self.$inject_state = $$props => {
		if ('user' in $$props) $$invalidate(0, user = $$props.user);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [user, success_handler, error_handler];
}

class Facebook extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Facebook",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src\routes\login.svelte generated by Svelte v3.48.0 */

const { console: console_1 } = globals;
const file = "src\\routes\\login.svelte";

function create_fragment(ctx) {
	let script;
	let script_src_value;
	let t0;
	let div0;
	let t1;
	let div1;
	let t2;
	let facebook;
	let current;
	facebook = new Facebook({ $$inline: true });

	const block = {
		c: function create() {
			script = element("script");
			t0 = space();
			div0 = element("div");
			t1 = space();
			div1 = element("div");
			t2 = space();
			create_component(facebook.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-13koppx\"]', document.head);
			script = claim_element(head_nodes, "SCRIPT", { src: true });
			var script_nodes = children(script);
			script_nodes.forEach(detach_dev);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);

			div0 = claim_element(nodes, "DIV", {
				id: true,
				"data-client_id": true,
				"data-context": true,
				"data-ux_mode": true,
				"data-callback": true,
				"data-nonce": true,
				"data-auto_prompt": true
			});

			var div0_nodes = children(div0);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);

			div1 = claim_element(nodes, "DIV", {
				class: true,
				"data-type": true,
				"data-shape": true,
				"data-theme": true,
				"data-text": true,
				"data-size": true,
				"data-logo_alignment": true,
				"data-width": true
			});

			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			claim_component(facebook.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(script.src, script_src_value = "https://accounts.google.com/gsi/client")) attr_dev(script, "src", script_src_value);
			script.async = true;
			script.defer = true;
			add_location(script, file, 1, 2, 17);
			attr_dev(div0, "id", "g_id_onload");
			attr_dev(div0, "data-client_id", "993299729529-6b37e8shjr3du0kprehcicc9vdcbaq9d.apps.googleusercontent.com");
			attr_dev(div0, "data-context", "signin");
			attr_dev(div0, "data-ux_mode", "popup");
			attr_dev(div0, "data-callback", "handleCredentialResponse");
			attr_dev(div0, "data-nonce", "");
			attr_dev(div0, "data-auto_prompt", "false");
			add_location(div0, file, 4, 0, 111);
			attr_dev(div1, "class", "g_id_signin");
			attr_dev(div1, "data-type", "standard");
			attr_dev(div1, "data-shape", "rectangular");
			attr_dev(div1, "data-theme", "filled_blue");
			attr_dev(div1, "data-text", "continue_with");
			attr_dev(div1, "data-size", "large");
			attr_dev(div1, "data-logo_alignment", "left");
			attr_dev(div1, "data-width", "500");
			add_location(div1, file, 13, 0, 394);
		},
		m: function mount(target, anchor) {
			append_hydration_dev(document.head, script);
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div0, anchor);
			insert_hydration_dev(target, t1, anchor);
			insert_hydration_dev(target, div1, anchor);
			insert_hydration_dev(target, t2, anchor);
			mount_component(facebook, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(facebook.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(facebook.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			detach_dev(script);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t2);
			destroy_component(facebook, detaching);
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

function decodeJwtResponse(token) {
	let base64Url = token.split('.')[1];
	let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

	let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));

	return JSON.parse(jsonPayload);
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Login', slots, []);
	let responsePayload;

	globalThis.handleCredentialResponse = async response => {
		responsePayload = decodeJwtResponse(response.credential);
		console.log("ID: " + responsePayload.sub);
		console.log('Full Name: ' + responsePayload.name);
		console.log('Given Name: ' + responsePayload.given_name);
		console.log('Family Name: ' + responsePayload.family_name);
		console.log("Image URL: " + responsePayload.picture);
		console.log("Email: " + responsePayload.email);
		preferences.set("token");
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Login> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		onMount,
		authenticated,
		preferences,
		Facebook,
		decodeJwtResponse,
		responsePayload
	});

	$$self.$inject_state = $$props => {
		if ('responsePayload' in $$props) responsePayload = $$props.responsePayload;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uOWNiYmQ3MGIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtZmFjZWJvb2stbG9naW4vZGlzdC9GYWNlYm9va0xvZ2luLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9saWIvRmFjZWJvb2suc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9sb2dpbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCA+XG5pbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tIFwic3ZlbHRlXCI7XG5leHBvcnQgbGV0IGNsaWVudElkO1xuZXhwb3J0IGxldCBzdGF0ZTtcbmV4cG9ydCBsZXQgcmVkaXJlY3RVcmk7XG5leHBvcnQgbGV0IHJlc3BvbnNlVHlwZSA9IHVuZGVmaW5lZDtcbmV4cG9ydCBsZXQgc2NvcGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgbGV0IHBvbGxJbnRlcnZhbCA9IDUwMDtcbmNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5jb25zdCB1cmxGYWNlYm9vayA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Y1LjAvZGlhbG9nL29hdXRoXCI7XG5sZXQgaW50ZXJ2YWwgPSAwO1xubGV0IHBvcHVwV2luZG93O1xuY29uc3QgY29udmVydFF1ZXJ5UGFyYW1zID0gKHVybCkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdXJsLnN1YnN0cigxKTtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBxdWVyeS5zcGxpdChcIiZcIikuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHBhcmFtLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgcmVzdWx0W2l0ZW1bMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGl0ZW1bMV0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgaWYgKGludGVydmFsKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAocG9wdXBXaW5kb3cpIHtcbiAgICAgICAgcG9wdXBXaW5kb3cuY2xvc2UoKTtcbiAgICB9XG59O1xuLy8gU3ZlbHRlR2l0aHViTG9naW4gYmFzZWRcbmNvbnN0IHBvbGwgPSAoKSA9PiB7XG4gICAgaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFwb3B1cFdpbmRvdyB8fCBwb3B1cFdpbmRvdy5jbG9zZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChcImVycm9yXCIsIG5ldyBFcnJvcihcIlRoZSBwb3B1cCB3YXMgY2xvc2VkXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9wdXBXaW5kb3cubG9jYXRpb24uaHJlZiA9PT0gdXJsRmFjZWJvb2sgfHxcbiAgICAgICAgICAgICAgICBwb3B1cFdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCJibGFua1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGF0Y2goXCJzdWNjZXNzXCIsIGNvbnZlcnRRdWVyeVBhcmFtcyhwb3B1cFdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpKTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBlcnJvclxuICAgICAgICB9XG4gICAgfSwgcG9sbEludGVydmFsKTtcbn07XG5jb25zdCBvbkxvZ2luID0gKCkgPT4ge1xuICAgIGxldCB1cmxQYXJhbXMgPSBgY2xpZW50X2lkPSR7Y2xpZW50SWR9JnN0YXRlPSR7c3RhdGV9JnJlZGlyZWN0X3VyaT0ke3JlZGlyZWN0VXJpfWA7XG4gICAgaWYgKHJlc3BvbnNlVHlwZSkge1xuICAgICAgICB1cmxQYXJhbXMgKz0gYCZyZXNwb25zZV90eXBlPSR7cmVzcG9uc2VUeXBlfWA7XG4gICAgfVxuICAgIGlmIChzY29wZSkge1xuICAgICAgICB1cmxQYXJhbXMgKz0gYCZzY29wZT0ke3Njb3BlfWA7XG4gICAgfVxuICAgIHBvcHVwV2luZG93ID0gd2luZG93Lm9wZW4oYCR7dXJsRmFjZWJvb2t9PyR7dXJsUGFyYW1zfWAsIFwiZmFjZWJvb2stb2F1dGhcIiwgXCJcIik7XG4gICAgZGlzcGF0Y2goXCJyZXF1ZXN0XCIpO1xuICAgIHBvbGwoKTtcbn07XG48L3NjcmlwdD5cblxuPHNsb3Qge29uTG9naW59IC8+XG4iLCI8c2NyaXB0PlxyXG4gICAgaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSBcInN2ZWx0ZS1mYWNlYm9vay1sb2dpblwiO1xyXG4gICAgbGV0IHVzZXIgPSBudWxsO1xyXG4gIDwvc2NyaXB0PlxyXG4gIFxyXG4gIDxGYWNlYm9va0xvZ2luXHJcbiAgICBjbGllbnRJZD1cIjYwMzQyNjMyNDMxMTkyMlwiXHJcbiAgICBzdGF0ZT1cIjFcIlxyXG4gICAgcmVkaXJlY3RVcmk9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCJcclxuICAgIG9uOnN1Y2Nlc3M9eyhwYXJhbXMpID0+ICh1c2VyID0gcGFyYW1zLmRldGFpbC5jb2RlKX1cclxuICAgIG9uOmVycm9yPXsoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKX1cclxuICAgIGxldDpvbkxvZ2luXHJcbiAgPlxyXG4gICAgPGJ1dHRvbiBvbjpjbGljaz17b25Mb2dpbn0+RmFjZWJvb2sgTG9naW48L2J1dHRvbj5cclxuICA8L0ZhY2Vib29rTG9naW4+XHJcbiAgXHJcbiAgeyNpZiB1c2VyfVxyXG4gICAgICA8aDE+TG9naW4gQmVyaGFzaWw8L2gxPlxyXG4gICB7L2lmfSIsIjxzdmVsdGU6aGVhZD5cclxuICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9nc2kvY2xpZW50XCIgYXN5bmMgZGVmZXI+PC9zY3JpcHQ+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48ZGl2IGlkPVwiZ19pZF9vbmxvYWRcIlxyXG4gICAgIGRhdGEtY2xpZW50X2lkPVwiOTkzMjk5NzI5NTI5LTZiMzdlOHNoanIzZHUwa3ByZWhjaWNjOXZkY2JhcTlkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcclxuICAgICBkYXRhLWNvbnRleHQ9XCJzaWduaW5cIlxyXG4gICAgIGRhdGEtdXhfbW9kZT1cInBvcHVwXCJcclxuICAgICBkYXRhLWNhbGxiYWNrPVwiaGFuZGxlQ3JlZGVudGlhbFJlc3BvbnNlXCJcclxuICAgICBkYXRhLW5vbmNlPVwiXCJcclxuICAgICBkYXRhLWF1dG9fcHJvbXB0PVwiZmFsc2VcIj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiZ19pZF9zaWduaW5cIlxyXG4gICAgIGRhdGEtdHlwZT1cInN0YW5kYXJkXCJcclxuICAgICBkYXRhLXNoYXBlPVwicmVjdGFuZ3VsYXJcIlxyXG4gICAgIGRhdGEtdGhlbWU9XCJmaWxsZWRfYmx1ZVwiXHJcbiAgICAgZGF0YS10ZXh0PVwiY29udGludWVfd2l0aFwiXHJcbiAgICAgZGF0YS1zaXplPVwibGFyZ2VcIlxyXG4gICAgIGRhdGEtbG9nb19hbGlnbm1lbnQ9XCJsZWZ0XCJcclxuICAgICBkYXRhLXdpZHRoPVwiNTAwXCI+XHJcbjwvZGl2PlxyXG5cclxuPEZhY2Vib29rLz5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgXHJcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcclxuICBpbXBvcnQgeyBhdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4uL3N0b3Jlcy9hdXRoXCI7XHJcbiAgaW1wb3J0IHsgcHJlZmVyZW5jZXMgfSBmcm9tIFwiLi4vc3RvcmVzL2F1dGhcIjtcclxuICBpbXBvcnQgRmFjZWJvb2sgZnJvbSBcIi4uL2xpYi9GYWNlYm9vay5zdmVsdGVcIjtcclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlSnd0UmVzcG9uc2UodG9rZW4pIHtcclxuICAgICAgbGV0IGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV1cclxuICAgICAgbGV0IGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xyXG4gICAgICBsZXQganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQoYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oYykge1xyXG4gICAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gICAgICB9KS5qb2luKCcnKSk7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25QYXlsb2FkKVxyXG4gIH1cclxuXHJcbiAgbGV0IHJlc3BvbnNlUGF5bG9hZDtcclxuICBnbG9iYWxUaGlzLmhhbmRsZUNyZWRlbnRpYWxSZXNwb25zZSA9IGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgIHJlc3BvbnNlUGF5bG9hZCA9IGRlY29kZUp3dFJlc3BvbnNlKHJlc3BvbnNlLmNyZWRlbnRpYWwpO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coXCJJRDogXCIgKyByZXNwb25zZVBheWxvYWQuc3ViKTtcclxuICAgICAgY29uc29sZS5sb2coJ0Z1bGwgTmFtZTogJyArIHJlc3BvbnNlUGF5bG9hZC5uYW1lKTtcclxuICAgICAgY29uc29sZS5sb2coJ0dpdmVuIE5hbWU6ICcgKyByZXNwb25zZVBheWxvYWQuZ2l2ZW5fbmFtZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdGYW1pbHkgTmFtZTogJyArIHJlc3BvbnNlUGF5bG9hZC5mYW1pbHlfbmFtZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW1hZ2UgVVJMOiBcIiArIHJlc3BvbnNlUGF5bG9hZC5waWN0dXJlKTtcclxuICAgICAgY29uc29sZS5sb2coXCJFbWFpbDogXCIgKyByZXNwb25zZVBheWxvYWQuZW1haWwpO1xyXG4gICAgICBwcmVmZXJlbmNlcy5zZXQoXCJ0b2tlblwiKTtcclxuICB9XHJcbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQVNNLFdBQVcsR0FBRyw0Q0FBNEM7Ozs7O09BUHJELFFBQVE7T0FDUixLQUFLO09BQ0wsV0FBVztPQUNYLFlBQVksR0FBRyxTQUFTO09BQ3hCLEtBQUssR0FBRyxTQUFTO09BQ2pCLFlBQVksR0FBRyxHQUFHO09BQ3ZCLFFBQVEsR0FBRyxxQkFBcUI7S0FFbEMsUUFBUSxHQUFHLENBQUM7S0FDWixXQUFXOztPQUNULGtCQUFrQixHQUFJLEdBQUc7UUFDckIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixNQUFNOztFQUNaLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBRSxLQUFLO1NBQ3JCLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUc7R0FDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7OztTQUV4QyxNQUFNOzs7T0FFWCxLQUFLO01BQ0gsUUFBUTtHQUNSLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUTtHQUM3QixRQUFRLEdBQUcsSUFBSTs7O01BRWYsV0FBVztHQUNYLFdBQVcsQ0FBQyxLQUFLOzs7OztPQUluQixJQUFJO0VBQ04sUUFBUSxHQUFHLE1BQU0sQ0FBQyxXQUFXOzs7VUFFaEIsV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssS0FBSztNQUM1QyxLQUFLO01BQ0wsUUFBUSxDQUFDLE9BQU8sTUFBTSxLQUFLLENBQUMsc0JBQXNCOzs7O1NBR2xELFdBQVcs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