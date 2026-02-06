import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentWise - AI Powered Dental Assistant",
  description:
    "Get instant dental advice with our AI dental assistant. Available 24/7.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#f4a261",
          colorBackground: "rgba(12,12,14,0.88)",
          colorText: "#e5e5e5",
          borderRadius: "18px",
        },

        elements: {
          card: "backdrop-blur-xl bg-background/80 border border-white/10 shadow-2xl",

          headerTitle: "text-foreground text-xl font-semibold",
          headerSubtitle: "text-muted-foreground",

          formFieldInput:
            "bg-background/60 border-white/10 focus:ring-primary/40 rounded-xl placeholder:text-muted-foreground",

          formFieldInputText:
            "text-foreground placeholder:text-muted-foreground",

          formButtonPrimary:
            "!bg-[#f4a261] !text-black hover:!bg-[#f4a261]/90 rounded-xl shadow-[0_0_22px_rgba(244,162,97,0.4)]",

          /* 🔥 FORCE GOOGLE BUTTON */
          socialButtonsBlockButton:
            "!bg-[#f4a261] !text-black hover:!bg-[#f4a261]/90 rounded-xl shadow-[0_0_22px_rgba(244,162,97,0.4)]",

          socialButtonsBlockButtonText: "!text-black font-medium",

          socialButtonsBlockButtonIcon: "brightness-100",

          footerActionLink: "text-[#f4a261] hover:underline",
        },
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-background text-foreground`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
