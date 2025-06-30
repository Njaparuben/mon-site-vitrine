interface Props {
    name:string
    link:string
}

function NavBar({ navList, styles }: { navList: Props[]; styles: string }) {
  return (
    <ul className="flex gap-4">
      {navList.map(item => (
        <li key={item.link} className={styles}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
export default NavBar;