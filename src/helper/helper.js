export const givePhotoURL = (name) => {
  const newName = name.split(" ").join("-").toLowerCase();
  if (
    newName === "school-id-print-system" ||
    newName === "books-store-erp" ||
    newName === "ai-stock-simulator"
  ) {
    return `https://placehold.co/800x450/0f172a/white?text=${name.split(" ").join("+")}`;
  }
  return `../assets/${newName}.webp`;
};