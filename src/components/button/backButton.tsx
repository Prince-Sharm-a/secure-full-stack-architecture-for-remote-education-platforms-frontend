"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

interface BackButtonProps {
  title?: string;
  fallbackRoute?: string;
}

export default function BackButton({
  title,
  fallbackRoute = "/",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackRoute);
    }
  };

  return (
    <div className="flex items-center gap-3 mb-4 w-fit">
      <Button variant={"outline"}
        onClick={handleBack}
        className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
      >
        <ArrowLeft size={20} />
      </Button>

      {title && (
        <h1 className="text-xl font-semibold capitalize">
          {title}
        </h1>
      )}
    </div>
  );
}