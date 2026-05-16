import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "mikdigital",
description: "Technical performance marketing for companies that care about revenue, not vanity metrics.",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html lang="en"> <body>{children}</body> </html>
);
}
