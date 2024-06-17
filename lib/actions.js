"use server";

import { redirect } from "next/navigation";
import { inputMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvadidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };

  if (
    isInvadidText(meal.title) ||
    isInvadidText(meal.summary) ||
    isInvadidText(meal.instructions) ||
    isInvadidText(meal.creator) ||
    isInvadidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("Invalid input");
    return { message: "Invalid input" };
  }
  await inputMeal(meal);
  revalidatePath("/meals");
  // revalidatePath("/meals", "layout");
  redirect("/meals");
}
