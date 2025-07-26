export type NavItem = Readonly<{
  id: string;
  label: string;
}>;

export type NavProps = {
  navItems: ReadonlyArray<NavItem>;
  activeId: NavItem['id'];
  handleClick: (id: NavItem['id']) => void;
};
