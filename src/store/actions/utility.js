export updateObject = (oldObject,updatedPart)=>{
  return {
    ...oldObject,
    ...updatedPart,
  }
}
