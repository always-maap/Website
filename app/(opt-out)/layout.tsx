import { vazirmatn } from "../fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className={vazirmatn.className}>
      <main className="">{children}</main>
    </body>
  );
}
