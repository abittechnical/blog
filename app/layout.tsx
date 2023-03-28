import "@/styles/globals.css";
import "@code-hike/mdx/dist/index.css";
import { cx } from "class-variance-authority";
import Script from "next/script";

import { bluuNextFont, geliatFont, ibmPlexMono } from "@/styles/fonts";
import { colorModeScript } from "@/lib/utils/colorModeScript";
import { ColorModeToggle, GridPattern } from "@/components";

export const metadata = {
  title: "A Bit Technical",
  description: "Probably the best blog on the internet",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="en"
    className={cx(
      geliatFont.variable,
      ibmPlexMono.variable,
      bluuNextFont.variable
    )}
  >
    <body className="bg-neutral-1 dark:bg-neutralDark-1 relative antialiased">
      {/*<GridPattern />*/}
      {children}
      <ColorModeToggle />
    </body>
    <Script
      id="color-mode"
      dangerouslySetInnerHTML={{ __html: colorModeScript }}
    />
  </html>
);
export default RootLayout;
