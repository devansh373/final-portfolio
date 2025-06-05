export const givePhotoURL=(name)=>{
    const newName = name.split(" ").join("-").toLowerCase()
    return `../assets/${newName}.webp`
}