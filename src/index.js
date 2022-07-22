module.exports = function check(str, bracketsConfig) {
  // your solution

  let str1=str;
  
    for(let i=0; i<str1.length; i++){
      for (let j=0; j<bracketsConfig.length; j++){
        if (str1.length!==2 && str1[i]===bracketsConfig[j][0] && str1[i+1]===bracketsConfig[j][1]){        
          str1=str1.slice(0,i)+str1.slice(i+1);
          str1=str1.slice(0,i)+str1.slice(i+1);
          i=0;
          j=bracketsConfig.length;          
        }     
      }    
    }

    for (j=0; j<bracketsConfig.length; j++){
      if (str1.length===2 && str1[0]===bracketsConfig[j][0] && str1[1]===bracketsConfig[j][1]){
        str1='';        
      }      
    } 
  
  return str1.length===0; 

}
