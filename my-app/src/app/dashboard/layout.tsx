import {
  ClerkProvider,
} from '@clerk/nextjs'


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
    );
  }
  