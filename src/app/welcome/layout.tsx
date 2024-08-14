import TelegramNavbar from "@/components/TelegramNavbar";

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