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
