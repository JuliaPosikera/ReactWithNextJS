import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header className={styles.header}></header>
      <h1>
        Delecious meals, created
        <span className={styles.highlight}> by you</span>
        <p>
          choose your favourite recioe and cook it yourself. It is easy and fun
        </p>
        <p className={styles.cta}>
          <Link href="meals/share">Share your favourite recipe</Link>
        </p>
      </h1>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
