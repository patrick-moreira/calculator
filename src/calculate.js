export default (click, resultCurrent, setResult) => {
    if (click == ''){
      setResult('0'); 
    }else if(click == '='){
      r = eval(resultCurrent);
      setResult(r);
    }else if (resultCurrent == '0'){ 
      setResult(click);
    }else{
      setResult(resultCurrent+=click);
    }  
}
