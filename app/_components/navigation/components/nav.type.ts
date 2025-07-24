export type NavItem = {
  id: string;
  label: string;
};

export type NavProps = {
  navItems: NavItem[];
  activeId: NavItem['id'];
  handleClick: (id: string) => void;
};
