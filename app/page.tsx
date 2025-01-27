import Link from "next/link";
import {
	convexAuthNextjsToken,
	isAuthenticatedNextjs,
} from "@convex-dev/auth/nextjs/server";

export default async function Home() {
	const token = await convexAuthNextjsToken();
	const isAuthenticated = await isAuthenticatedNextjs();

	return (
		<div>
			<h1>Next.js + Convezx</h1>

			{token ? `You are signed and ${token} ` : "You are not signed"}

			{isAuthenticated ? (
				<Link href="/signout">Signout</Link>
			) : (
				<Link href="/signin">Sign In</Link>
			)}
		</div>
	);
}
