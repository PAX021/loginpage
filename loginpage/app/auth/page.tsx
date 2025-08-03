"use client";
import { useState } from "react";
import styles from "./auth.module.scss";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { validatePhone } from "@/lib/validation";

export default function AuthPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuthContext();

  const handleLogin = async () => {
    const validationResult = validatePhone(phone);
    if (!validationResult.valid) {
      setError(validationResult.message || "Phone is not valid");
      return;
    }
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      const user = {
        name: `${data.results[0].name.first} ${data.results[0].name.last}`,
        email: data.results[0].email,
      };
      login(user);
      router.push("/dashboard");
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2>ورود</h2>
      <Input
        label="شماره تلفن"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="مثلاً 09123456789"
      />
      {error && <span className={styles.error}>{error}</span>}
      <Button text="ورود" onClick={handleLogin} />
    </div>
  );
}
