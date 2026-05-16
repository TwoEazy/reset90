import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RESET90 FAQ",
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
