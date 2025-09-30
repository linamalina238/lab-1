const sourceArray = [
    100, 'sun',   'hot' ,'cloud' , 'world',-5, true , 'false' , false ,  65 ,'jump' ,'run' ,  'relax' ,-74 ,'word','moon' ,62,'moonlight','cat', 76,'mouse',-32,0 ]
    const Types = { number: 0, string: 0, boolean: 0 };
function countTypes(array) {
  for (const item of array) {
    const type = typeof item;
    if (type in Types) {
      Types[type]++;
    }
  }
}
countTypes(sourceArray);
console.dir(Types);