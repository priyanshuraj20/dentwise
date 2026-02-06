"use client";

import Image from "next/image";
import { Github, Instagram, Linkedin, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="relative px-6 py-14 border-t bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="space-y-5 group">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="DentWise Logo"
                width={40}
                height={40}
                className="w-10 h-10 transition-transform duration-300 group-hover:rotate-6"
              />
              <span className="font-semibold text-xl tracking-tight">
                DentWise
              </span>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              AI-powered dental assistance that actually helps.
            </p>
          </div>

          {/* LINK COLUMNS */}
          {[
            { title: "Product", links: ["How it works", "Pricing", "FAQ"] },
            {
              title: "Support",
              links: ["Help center", "Contact us", "Status"],
            },
            { title: "Legal", links: ["Privacy", "Terms", "Security"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-base mb-4">{col.title}</h4>
              <ul className="space-y-3 text-base text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="relative hover:text-foreground transition-colors
                      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                      after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t mt-12 pt-8 flex flex-col items-center gap-4 text-base text-muted-foreground">
          <p className="text-center">
            © 2026 DentWise. Built for real people with real dental questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 font-medium">
            <span className="flex items-center gap-2">
              Developed with{" "}
              <Heart className="h-5 w-5 text-red-500 animate-pulse" />
              by <span className="text-foreground">Priyanshu Raj</span>
            </span>

            <div className="flex items-center gap-2">
              {[
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/priyanshuraj2005/",
                },
                { icon: Github, link: "https://github.com/priyanshuraj20" },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/priyanshu_agrawal08/",
                },
              ].map((Item, i) => (
                <a
                  key={i}
                  href={Item.link}
                  target="_blank"
                  className="p-2 rounded-full border border-border
            hover:border-primary hover:text-primary transition-all
            hover:scale-110
            hover:shadow-[0_0_14px_rgba(99,102,241,0.45)]"
                >
                  <Item.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
