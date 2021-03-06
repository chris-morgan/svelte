/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, append, createElement, createText, destroyEach, detachAfter, detachNode, flush, init, insert, run, safe_not_equal, setData } from "svelte/internal";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.comment = list[i];
	child_ctx.i = i;
	return child_ctx;
}

// (1:0) {#each comments as comment, i}
function create_each_block($$, ctx) {
	var div, strong, text0, text1, span, text2_value = ctx.comment.author, text2, text3, text4_value = ctx.elapsed(ctx.comment.time, ctx.time), text4, text5, text6, raw_value = ctx.comment.html, raw_before;

	return {
		c() {
			div = createElement("div");
			strong = createElement("strong");
			text0 = createText(ctx.i);
			text1 = createText("\n\n\t\t");
			span = createElement("span");
			text2 = createText(text2_value);
			text3 = createText(" wrote ");
			text4 = createText(text4_value);
			text5 = createText(" ago:");
			text6 = createText("\n\n\t\t");
			raw_before = createElement('noscript');
			span.className = "meta";
			div.className = "comment";
		},

		m(target, anchor) {
			insert(target, div, anchor);
			append(div, strong);
			append(strong, text0);
			append(div, text1);
			append(div, span);
			append(span, text2);
			append(span, text3);
			append(span, text4);
			append(span, text5);
			append(div, text6);
			append(div, raw_before);
			raw_before.insertAdjacentHTML("afterend", raw_value);
		},

		p(changed, ctx) {
			if ((changed.comments) && text2_value !== (text2_value = ctx.comment.author)) {
				setData(text2, text2_value);
			}

			if ((changed.elapsed || changed.comments || changed.time) && text4_value !== (text4_value = ctx.elapsed(ctx.comment.time, ctx.time))) {
				setData(text4, text4_value);
			}

			if ((changed.comments) && raw_value !== (raw_value = ctx.comment.html)) {
				detachAfter(raw_before);
				raw_before.insertAdjacentHTML("afterend", raw_value);
			}
		},

		d(detach) {
			if (detach) {
				detachNode(div);
			}
		}
	};
}

function create_fragment($$, ctx) {
	var text0, p, text1, current;

	var each_value = ctx.comments;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block($$, get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text0 = createText("\n\n");
			p = createElement("p");
			text1 = createText(ctx.foo);
		},

		m(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, text0, anchor);
			insert(target, p, anchor);
			append(p, text1);
			current = true;
		},

		p(changed, ctx) {
			if (changed.comments || changed.elapsed || changed.time) {
				each_value = ctx.comments;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block($$, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(text0.parentNode, text0);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			if (changed.foo) {
				setData(text1, ctx.foo);
			}
		},

		i(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d(detach) {
			destroyEach(each_blocks, detach);

			if (detach) {
				detachNode(text0);
				detachNode(p);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { comments, elapsed, time, foo } = $$props;

	$$self.$set = $$props => {
		if ('comments' in $$props) $$invalidate('comments', comments = $$props.comments);
		if ('elapsed' in $$props) $$invalidate('elapsed', elapsed = $$props.elapsed);
		if ('time' in $$props) $$invalidate('time', time = $$props.time);
		if ('foo' in $$props) $$invalidate('foo', foo = $$props.foo);
	};

	return { comments, elapsed, time, foo };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get comments() {
		return this.$$.ctx.comments;
	}

	set comments(comments) {
		this.$set({ comments });
		flush();
	}

	get elapsed() {
		return this.$$.ctx.elapsed;
	}

	set elapsed(elapsed) {
		this.$set({ elapsed });
		flush();
	}

	get time() {
		return this.$$.ctx.time;
	}

	set time(time) {
		this.$set({ time });
		flush();
	}

	get foo() {
		return this.$$.ctx.foo;
	}

	set foo(foo) {
		this.$set({ foo });
		flush();
	}
}

export default SvelteComponent;