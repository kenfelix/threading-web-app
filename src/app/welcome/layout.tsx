'use client'

import TelegramNavbar from "@/components/TelegramNavbar";
import "@twa-dev/sdk";
import WebApp from '@twa-dev/sdk'

WebApp.ready();
WebApp.expand();

export default function WelcomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
       <TelegramNavbar/>
      {children}
    </section>
  )
}