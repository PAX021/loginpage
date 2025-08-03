"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/auth");
  }, [user, router]);

  return user ? <h1>Welcome to the Dashboard, {user.name}!</h1> : null;
}
