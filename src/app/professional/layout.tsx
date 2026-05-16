import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RESET90 Professional",
};

export default function ProfessionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
