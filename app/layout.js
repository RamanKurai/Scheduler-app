import {Inter} from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import CreateEventDrawer from "@/components/create-event";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Schedulrr",
  description: "Meeting Scheduling App",
};

export default function RootLayout({ children }) {
  return (
     <ClerkProvider>
       <html lang="en">
        <body className={inter.className}>
          {/* <Header /> */}
          <Header/>
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          {/* Footer */}
          <footer className="bg-blue-100 py-12">
            <div className="container mx-auto  px-4 text-center text-gray-600">
              <p>Made with 💗 by Raman Kurai</p>
            </div>
          </footer>
          <CreateEventDrawer/>
        </body>
      </html>
     </ClerkProvider>
  );
}
