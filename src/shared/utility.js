export const updateObject = (oldObject,updatedPart)=>{
  return {
    ...oldObject,
    ...updatedPart,
  }
}

export const validateInput =(value,rules)=>{
  let isValid = true;
  const trimedValue = value.trim();
  if(!rules){
    return true;
  }
  if(rules.required){
    isValid= trimedValue!=='' &&isValid;
  }
  if(rules.minLength){
    isValid= trimedValue.length >= rules.minLength &&isValid;
  }
  if(rules.maxLength){
    isValid= trimedValue.length <= rules.maxLength &&isValid;
  }
  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
}
