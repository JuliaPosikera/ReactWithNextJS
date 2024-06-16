import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <div>MealsPage</div>
      <div>
        <Link href="meals/share">Share</Link>
      </div>
      <div>
        <Link href="meals/fff">Slug-1</Link>
      </div>
      <div>
        <Link href="meals/frrr">Slug-2</Link>
      </div>
    </>
  );
}
