import Footer from "@/components/Footer";

import Talk from "@/components/Talk";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
      <Talk />
      <Footer />
    </div>
  );
}
