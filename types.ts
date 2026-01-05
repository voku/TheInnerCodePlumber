export interface SectionData {
  id: string;
  title: string;
}

export interface NavItemProps {
  section: SectionData;
  activeSection: string;
  onClick: (id: string) => void;
}
