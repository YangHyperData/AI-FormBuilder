import localFont from "next/font/local";
import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Yang Stone AI-FormBuilder",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="light">
        <body
          className={inter.className}>
          <Header />
          <Toaster/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
