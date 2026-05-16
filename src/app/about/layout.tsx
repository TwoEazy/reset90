import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RESET90",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
