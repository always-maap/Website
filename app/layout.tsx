import "./global.css";
import AnalyticsWrapper from "../components/analytics";
import { kaisei } from "./fonts";

export const metadata = {
  title: {
    default: "Mohammad ali Ali panah",
    template: "%s | Mohammad ali Ali panah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Mohammad ali Ali panah",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={kaisei.variable}>
      {children}
      <AnalyticsWrapper />
    </html>
  );
}
