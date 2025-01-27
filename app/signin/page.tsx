"use client";
import { useAuthActions } from "@convex-dev/auth/react";

import { useState } from "react";

export default function SignIn() {
	const { signIn } = useAuthActions();
	const [step, setStep] = useState<"signUp" | "signIn">("signIn");
	return (
		<div className="container h-screen flex items-center justify-center">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					const formData = new FormData(event.currentTarget);
					void signIn("password", formData);
				}}
				className="border flex p-3 w-2/3 flex-col gap-3"
			>
				<input name="email" placeholder="Email" type="text" />
				<input name="password" placeholder="Password" type="text" />
				<input name="flow" type="hidden" value={step} />
				<button type="submit">
					{step === "signIn" ? "Sign in" : "Sign up"}
				</button>
				<button
					type="button"
					onClick={() => {
						setStep(step === "signIn" ? "signUp" : "signIn");
					}}
				>
					{step === "signIn" ? "Sign up instead" : "Sign in instead"}
				</button>
			</form>
		</div>
	);
}
