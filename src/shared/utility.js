export const updateObject = (oldObject,updatedPart)=>{
  return {
    ...oldObject,
    ...updatedPart,
  }
}
