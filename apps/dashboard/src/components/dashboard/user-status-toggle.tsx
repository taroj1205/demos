"use client";

import { Button } from "@/components/ui/button";
import { updateUserStatus, type User } from "@/actions/dashboard";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";

interface UserStatusToggleProps {
  user: User;
}

export function UserStatusToggle({ user }: UserStatusToggleProps) {
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    startTransition(async () => {
      const newStatus = user.status === "active" ? "inactive" : "active";
      await updateUserStatus(user.id, newStatus);
    });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleToggle}
      disabled={isPending}
      className="w-16"
    >
      {isPending ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : user.status === "active" ? (
        "Disable"
      ) : (
        "Enable"
      )}
    </Button>
  );
}
