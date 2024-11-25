export type SectionRefs = {
  home: HTMLDivElement | null;
  projects: HTMLDivElement | null;
  skills: HTMLDivElement | null;
  contact: HTMLDivElement | null;
};

export type NavbarTypes = {
  name: string;
  path: string;
  type: keyof SectionRefs;
};

export interface HeaderProps {
  onNavigate: (section: keyof SectionRefs) => void;
}

export interface ProjectType {
  id: number;
  title: string;
  image: string;
  url: string;
  iosUrl?: string;
  androidUrl?: string;
  type: "mobile" | "web";
  tech: string;
  tech2: string;
  status: string;
  techUsed: string[];
  des: { id: number; para: string }[];
  images: { id: number; url: string }[];
}
