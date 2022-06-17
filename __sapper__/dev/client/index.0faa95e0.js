import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, a as authenticated, g as globals, e as empty, b as insert_dev, n as noop, c as detach_dev, f as element, t as text, h as claim_element, j as children, k as claim_text, l as attr_dev, m as add_location, p as append_dev, q as set_data_dev, r as space, u as claim_space } from './client.f69a2e1b.js';

/* src\routes\index.svelte generated by Svelte v3.35.0 */

const { console: console_1 } = globals;
const file = "src\\routes\\index.svelte";

// (69:0) {:else}
function create_else_block(ctx) {
	let h2;
	let t;

	const block = {
		c: function create() {
			h2 = element("h2");
			t = text(/*message*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t = claim_text(h2_nodes, /*message*/ ctx[0]);
			h2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "text-center");
			add_location(h2, file, 69, 2, 1722);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*message*/ 1) set_data_dev(t, /*message*/ ctx[0]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(69:0) {:else}",
		ctx
	});

	return block;
}

// (52:0) {#if token != ""}
function create_if_block(ctx) {
	let h2;
	let t0;
	let t1;
	let table;
	let tr0;
	let th0;
	let t2;
	let t3;
	let th1;
	let t4;
	let t5;
	let th2;
	let t6;
	let t7;
	let th3;
	let t8;
	let t9;
	let tr1;
	let td0;
	let t10;
	let t11;
	let td1;
	let t12;
	let t13;
	let td2;
	let t14;
	let t15;
	let td3;
	let t16;

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text("Data User");
			t1 = space();
			table = element("table");
			tr0 = element("tr");
			th0 = element("th");
			t2 = text("id");
			t3 = space();
			th1 = element("th");
			t4 = text("Nama Depan");
			t5 = space();
			th2 = element("th");
			t6 = text("Nama Belakang");
			t7 = space();
			th3 = element("th");
			t8 = text("Email");
			t9 = space();
			tr1 = element("tr");
			td0 = element("td");
			t10 = text(/*id*/ ctx[1]);
			t11 = space();
			td1 = element("td");
			t12 = text(/*first_name*/ ctx[2]);
			t13 = space();
			td2 = element("td");
			t14 = text(/*last_name*/ ctx[3]);
			t15 = space();
			td3 = element("td");
			t16 = text(/*email*/ ctx[4]);
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Data User");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			table = claim_element(nodes, "TABLE", { class: true });
			var table_nodes = children(table);
			tr0 = claim_element(table_nodes, "TR", { class: true });
			var tr0_nodes = children(tr0);
			th0 = claim_element(tr0_nodes, "TH", { class: true });
			var th0_nodes = children(th0);
			t2 = claim_text(th0_nodes, "id");
			th0_nodes.forEach(detach_dev);
			t3 = claim_space(tr0_nodes);
			th1 = claim_element(tr0_nodes, "TH", { class: true });
			var th1_nodes = children(th1);
			t4 = claim_text(th1_nodes, "Nama Depan");
			th1_nodes.forEach(detach_dev);
			t5 = claim_space(tr0_nodes);
			th2 = claim_element(tr0_nodes, "TH", { class: true });
			var th2_nodes = children(th2);
			t6 = claim_text(th2_nodes, "Nama Belakang");
			th2_nodes.forEach(detach_dev);
			t7 = claim_space(tr0_nodes);
			th3 = claim_element(tr0_nodes, "TH", { class: true });
			var th3_nodes = children(th3);
			t8 = claim_text(th3_nodes, "Email");
			th3_nodes.forEach(detach_dev);
			tr0_nodes.forEach(detach_dev);
			t9 = claim_space(table_nodes);
			tr1 = claim_element(table_nodes, "TR", { class: true });
			var tr1_nodes = children(tr1);
			td0 = claim_element(tr1_nodes, "TD", { class: true });
			var td0_nodes = children(td0);
			t10 = claim_text(td0_nodes, /*id*/ ctx[1]);
			td0_nodes.forEach(detach_dev);
			t11 = claim_space(tr1_nodes);
			td1 = claim_element(tr1_nodes, "TD", { class: true });
			var td1_nodes = children(td1);
			t12 = claim_text(td1_nodes, /*first_name*/ ctx[2]);
			td1_nodes.forEach(detach_dev);
			t13 = claim_space(tr1_nodes);
			td2 = claim_element(tr1_nodes, "TD", { class: true });
			var td2_nodes = children(td2);
			t14 = claim_text(td2_nodes, /*last_name*/ ctx[3]);
			td2_nodes.forEach(detach_dev);
			t15 = claim_space(tr1_nodes);
			td3 = claim_element(tr1_nodes, "TD", { class: true });
			var td3_nodes = children(td3);
			t16 = claim_text(td3_nodes, /*email*/ ctx[4]);
			td3_nodes.forEach(detach_dev);
			tr1_nodes.forEach(detach_dev);
			table_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 52, 2, 1421);
			attr_dev(th0, "class", "svelte-1tgs6ou");
			add_location(th0, file, 56, 6, 1486);
			attr_dev(th1, "class", "svelte-1tgs6ou");
			add_location(th1, file, 57, 6, 1504);
			attr_dev(th2, "class", "svelte-1tgs6ou");
			add_location(th2, file, 58, 6, 1530);
			attr_dev(th3, "class", "svelte-1tgs6ou");
			add_location(th3, file, 59, 6, 1559);
			attr_dev(tr0, "class", "svelte-1tgs6ou");
			add_location(tr0, file, 55, 4, 1475);
			attr_dev(td0, "class", "svelte-1tgs6ou");
			add_location(td0, file, 62, 6, 1599);
			attr_dev(td1, "class", "svelte-1tgs6ou");
			add_location(td1, file, 63, 6, 1619);
			attr_dev(td2, "class", "svelte-1tgs6ou");
			add_location(td2, file, 64, 6, 1647);
			attr_dev(td3, "class", "svelte-1tgs6ou");
			add_location(td3, file, 65, 6, 1674);
			attr_dev(tr1, "class", "svelte-1tgs6ou");
			add_location(tr1, file, 61, 4, 1588);
			attr_dev(table, "class", "text-center svelte-1tgs6ou");
			add_location(table, file, 54, 2, 1443);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, table, anchor);
			append_dev(table, tr0);
			append_dev(tr0, th0);
			append_dev(th0, t2);
			append_dev(tr0, t3);
			append_dev(tr0, th1);
			append_dev(th1, t4);
			append_dev(tr0, t5);
			append_dev(tr0, th2);
			append_dev(th2, t6);
			append_dev(tr0, t7);
			append_dev(tr0, th3);
			append_dev(th3, t8);
			append_dev(table, t9);
			append_dev(table, tr1);
			append_dev(tr1, td0);
			append_dev(td0, t10);
			append_dev(tr1, t11);
			append_dev(tr1, td1);
			append_dev(td1, t12);
			append_dev(tr1, t13);
			append_dev(tr1, td2);
			append_dev(td2, t14);
			append_dev(tr1, t15);
			append_dev(tr1, td3);
			append_dev(td3, t16);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*id*/ 2) set_data_dev(t10, /*id*/ ctx[1]);
			if (dirty & /*first_name*/ 4) set_data_dev(t12, /*first_name*/ ctx[2]);
			if (dirty & /*last_name*/ 8) set_data_dev(t14, /*last_name*/ ctx[3]);
			if (dirty & /*email*/ 16) set_data_dev(t16, /*email*/ ctx[4]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(table);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(52:0) {#if token != \\\"\\\"}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*token*/ ctx[5] != "") return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	validate_slots("Routes", slots, []);
	let message = "", id = "", first_name = "", last_name = "", email = "", token = "";

	onMount(async () => {
		try {
			authenticated.subscribe(async value => {
				if (value) {
					await fetch("http://localhost:4000/api/online-course/sessions/current-user", {
						method: "GET",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/x-www-form-urlencoded",
							"Authorization": `${value}`
						}
					}).then(response => response.json()).then(async responseJson => {
						if (responseJson.metadata.http_code == "200") {
							$$invalidate(1, id = responseJson.data.id);
							$$invalidate(2, first_name = responseJson.data.first_name);
							$$invalidate(3, last_name = responseJson.data.last_name);
							$$invalidate(4, email = responseJson.data.email);
							$$invalidate(5, token = value);
						}
					}).catch(error => {
						console.error(error);
						$$invalidate(5, token = "");
					});
				}
			});

			$$invalidate(0, message = "You are not logged in");
		} catch(e) {
			$$invalidate(0, message = "You are not logged in");
			authenticated.set("");
			$$invalidate(5, token = "");
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		onMount,
		authenticated,
		message,
		id,
		first_name,
		last_name,
		email,
		token
	});

	$$self.$inject_state = $$props => {
		if ("message" in $$props) $$invalidate(0, message = $$props.message);
		if ("id" in $$props) $$invalidate(1, id = $$props.id);
		if ("first_name" in $$props) $$invalidate(2, first_name = $$props.first_name);
		if ("last_name" in $$props) $$invalidate(3, last_name = $$props.last_name);
		if ("email" in $$props) $$invalidate(4, email = $$props.email);
		if ("token" in $$props) $$invalidate(5, token = $$props.token);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [message, id, first_name, last_name, email, token];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMGZhYTk1ZTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gIGltcG9ydCB7IGF1dGhlbnRpY2F0ZWQgfSBmcm9tIFwiLi4vc3RvcmVzL2F1dGhcIjtcblxuICBsZXQgbWVzc2FnZSA9IFwiXCIsXG4gICAgaWQgPSBcIlwiLFxuICAgIGZpcnN0X25hbWUgPSBcIlwiLFxuICAgIGxhc3RfbmFtZSA9IFwiXCIsXG4gICAgZW1haWwgPSBcIlwiLFxuICAgIHRva2VuID0gXCJcIjtcblxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXV0aGVudGljYXRlZC5zdWJzY3JpYmUoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL29ubGluZS1jb3Vyc2Uvc2Vzc2lvbnMvY3VycmVudC11c2VyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYCR7dmFsdWV9YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZUpzb24pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlSnNvbi5tZXRhZGF0YS5odHRwX2NvZGUgPT0gXCIyMDBcIikge1xuICAgICAgICAgICAgICAgIGlkID0gcmVzcG9uc2VKc29uLmRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSA9IHJlc3BvbnNlSnNvbi5kYXRhLmZpcnN0X25hbWU7XG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lID0gcmVzcG9uc2VKc29uLmRhdGEubGFzdF9uYW1lO1xuICAgICAgICAgICAgICAgIGVtYWlsID0gcmVzcG9uc2VKc29uLmRhdGEuZW1haWw7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgIHRva2VuID0gXCJcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG1lc3NhZ2UgPSBcIllvdSBhcmUgbm90IGxvZ2dlZCBpblwiO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG1lc3NhZ2UgPSBcIllvdSBhcmUgbm90IGxvZ2dlZCBpblwiO1xuICAgICAgYXV0aGVudGljYXRlZC5zZXQoXCJcIik7XG4gICAgICB0b2tlbiA9IFwiXCI7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG57I2lmIHRva2VuICE9IFwiXCJ9XG4gIDxoMj5EYXRhIFVzZXI8L2gyPlxuXG4gIDx0YWJsZSBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgPHRyPlxuICAgICAgPHRoPmlkPC90aD5cbiAgICAgIDx0aD5OYW1hIERlcGFuPC90aD5cbiAgICAgIDx0aD5OYW1hIEJlbGFrYW5nPC90aD5cbiAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+e2lkfTwvdGQ+XG4gICAgICA8dGQ+e2ZpcnN0X25hbWV9PC90ZD5cbiAgICAgIDx0ZD57bGFzdF9uYW1lfTwvdGQ+XG4gICAgICA8dGQ+e2VtYWlsfTwvdGQ+XG4gICAgPC90cj5cbiAgPC90YWJsZT5cbns6ZWxzZX1cbiAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57bWVzc2FnZX08L2gyPlxuey9pZn1cblxuPHN0eWxlPlxuICB0YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICB0ZCxcbiAgdGgge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3dCQXFFMkIsR0FBTzs7Ozs7O3dDQUFQLEdBQU87Ozs7Ozs7Ozs7Ozs7MERBQVAsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBUHZCLEdBQUU7Ozs2QkFDRixHQUFVOzs7NEJBQ1YsR0FBUzs7O3dCQUNULEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUhMLEdBQUU7Ozs7OzhDQUNGLEdBQVU7Ozs7OzZDQUNWLEdBQVM7Ozs7O3lDQUNULEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFITCxHQUFFO2tFQUNGLEdBQVU7Z0VBQ1YsR0FBUzt5REFDVCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBZFgsR0FBSyxPQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EvQ1YsT0FBTyxHQUFHLEVBQUUsRUFDZCxFQUFFLEdBQUcsRUFBRSxFQUNQLFVBQVUsR0FBRyxFQUFFLEVBQ2YsU0FBUyxHQUFHLEVBQUUsRUFDZCxLQUFLLEdBQUcsRUFBRSxFQUNWLEtBQUssR0FBRyxFQUFFOztDQUVaLE9BQU87O0dBRUgsYUFBYSxDQUFDLFNBQVMsT0FBUSxLQUFLO1FBQzlCLEtBQUs7V0FDRCxLQUFLLENBQ1QsK0RBQStEO01BRTdELE1BQU0sRUFBRSxLQUFLO01BQ2IsT0FBTztPQUNMLE1BQU0sRUFBRSxrQkFBa0I7T0FDMUIsY0FBYyxFQUFFLG1DQUFtQztPQUNuRCxlQUFlLEtBQUssS0FBSzs7UUFJNUIsSUFBSSxDQUFFLFFBQVEsSUFBSyxRQUFRLENBQUMsSUFBSSxJQUNoQyxJQUFJLE9BQVEsWUFBWTtVQUNuQixZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxLQUFLO3VCQUMxQyxFQUFFLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO3VCQUN6QixVQUFVLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVO3VCQUN6QyxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTO3VCQUN2QyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLO3VCQUMvQixLQUFLLEdBQUcsS0FBSzs7UUFHaEIsS0FBSyxDQUFFLEtBQUs7TUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUs7c0JBQ25CLEtBQUssR0FBRyxFQUFFOzs7OzttQkFJbEIsT0FBTyxHQUFHLHVCQUF1QjtVQUMxQixDQUFDO21CQUNSLE9BQU8sR0FBRyx1QkFBdUI7R0FDakMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO21CQUNwQixLQUFLLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
