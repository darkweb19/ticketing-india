"use client";
import { useAuthActions } from "@convex-dev/auth/react";

export default function () {
	const { signOut } = useAuthActions();
	return (
		<div>
			<button onClick={() => signOut()}>sign out</button>
		</div>
	);
}
