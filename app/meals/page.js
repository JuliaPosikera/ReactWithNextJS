import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export const metadata = {
  title: "All Meals",
  description: "Browse delicious meals shared by our community",
};

export default function MealsPage() {
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
        <Suspense
          fallback={<p className={styles.loading}> Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
