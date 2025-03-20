import type {Metadata} from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from '@/components/BootstrapClient/BootstrapClient.jsx';
import "./globals.css";

export const metadata: Metadata = {
    title: "Locality",
    description: "Track legislation locally",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        {children}
        <BootstrapClient/>
        </body>
        </html>
    );
}
