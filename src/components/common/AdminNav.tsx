import { FC, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { IconType } from "react-icons";
import {useEffect} from 'react'
interface Props {
  navItems: {
    label: string;
    icon: IconType;
    href: string;
  }[];
}

const NAV_OPEN_WIDTH = "w-60";
const NAV_CLOSE_WIDTH = "w-12";
const NAV_VISIBILITY = 'nav-visibility'


const AdminNav: FC<Props> = ({ navItems }): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);






  const toggleNav = (visibility:boolean) => {
    const currentNav = navRef.current;
    if (!currentNav) {
      return;
    }
    const { classList } = currentNav;
    if (visibility) {
      classList.remove(NAV_CLOSE_WIDTH);
      classList.add(NAV_OPEN_WIDTH);
    } else {
      classList.add(NAV_CLOSE_WIDTH);
      classList.remove(NAV_OPEN_WIDTH);
    }

  }








  const updateNavHandler = () => {
    toggleNav(visible)
    const newState = !visible
    setVisible(newState)
    localStorage.setItem('nav-visibility', JSON.stringify(newState))
  };

  useEffect(()=> {
    const navState = localStorage.getItem(NAV_VISIBILITY)
    if (navState !== null) {
      const newState = JSON.parse(navState)
      setVisible(newState)
      toggleNav(!newState)
    } else {
      setVisible(true)
    }
  },[])

  return (
    <nav
      ref={navRef}
      className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark flex flex-col justify-between transition-width overflow-hidden sticky top-0"
    >
      <div>
        <Link href="/admin" className="flex items-center space-x-2 p-3 mb-10">
          <Logo className="fill-highlight-light dark:fill-highlight-dark w-5 h-5" />
          {!visible && (
            <span className="text-highlight-light dark:text-highlight-dark text-xl font-semibold leading-none">
              Admin
            </span>
          )}
        </Link>

        {navItems.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center text-highlight-light dark:text-highlight-dark text-xl p-3 hover:scale-[0.98] transition mb-10"
            >
              <item.icon size={24} />
              {!visible && <span className="ml-2 leading-none">{item.label}</span>}
            </Link>
          );
        })}
      </div>

      <button
        onClick={updateNavHandler}
        className="text-highlight-light dark:text-highlight-dark p-3 hover:scale-[0.98] self-end"
      >
        {!visible ? (
          <RiMenuFoldFill size={25} />
        ) : (
          <RiMenuUnfoldFill size={25} />
        )}
      </button>
    </nav>
  );
};

export default AdminNav;
