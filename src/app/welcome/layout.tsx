'use client'

import TelegramNavbar from "@/components/TelegramNavbar";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const manifestUrl =
  "https://raw.githubusercontent.com/kenfelix/threading-web-app/main/tonconnect-manifest.json";

export default function WelcomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
    return (
        <TonConnectUIProvider manifestUrl={manifestUrl}>
            <section>
                <TelegramNavbar/>
                {children}
            </section>
        </TonConnectUIProvider>

  )
}