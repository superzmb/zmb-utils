/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: mingbo.zhang@hand-china.com
 * @Date: 2022-04-25 09:38:04
 * @LastEditors: mingbo.zhang@hand-china.com
 * @LastEditTime: 2022-04-25 10:18:18
 */
function deepClone(obj){
  if(obj === null) return obj;
  if(typeof obj !== 'object'){
    return obj;
  }

  if(obj instanceof Date) return new Date(obj);
  if(obj instanceof Function) return new Function(obj);
  if(obj instanceof RegExp) return RegExp(obj);
  let obj2 =  new obj.constructor;
  for (key in obj){
    if(obj.hasOwnProperty(key)){
      obj2[key] = deepClone(obj[key]);
    }
  }
  return obj2;
}

export { deepClone };
