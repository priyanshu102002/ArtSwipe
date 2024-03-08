import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Getting the user data
export const getUser = query({
	args: {
		email: v.string(),
	},
	handler: async (ctx, args) => {
		const result = await ctx.db
			.query("user")
			.filter((q) => q.eq(q.field("email"), args.email))
			.collect();

		return result;
	},
});

// Creating the user
export const createUser = mutation({
	args: {
		name: v.string(),
		email: v.string(),
		image: v.string(),
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert("user", args);
	},
});
