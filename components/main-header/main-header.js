"use client";

import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import HeaderBackground from "./header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          Food Next
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Food community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
