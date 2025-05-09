export interface Item {
  label: string;
  href: string; // React.AnchorHTMLAttributes<"a">?
}

export const navbarItems: Item[] = [
  "Collections",
  "Men",
  "Women",
  "About",
  "Contact",
].map((label) => ({ label, href: "#" }));
