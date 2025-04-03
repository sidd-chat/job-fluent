import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Toaster } from "sonner";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobFluent",
  description: "AI Powered Interview and Resume Upskiller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${monaSans.className} antialiased pattern`}>
          {children}

          <Toaster />
          {/* <BackgroundBeams/> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
