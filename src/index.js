import React, { useState } from 'react';
//import btnClick from './calculate';
import { 
  Container, 
  Content, 
  ContentNumbers, 
  Number, 
  Text,
  Result,
  ContainerResult } from './styles';

const Calculator = () => {
  const [result, setResult] = useState('0');

  const calculate = (click, resultCurrent) => {
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
  return (
    <Container>
      <ContainerResult>
        <Number onPress={()=>{calculate("", result)}}><Text>C</Text></Number>
        <Result>{result}</Result>
      </ContainerResult>        

      <Content>
        <ContentNumbers>
          <Number onPress={()=>{calculate("7", result)}}><Text>7</Text></Number>
          <Number onPress={()=>{calculate("4", result)}}><Text>4</Text></Number>
          <Number onPress={()=>{calculate("1", result)}}><Text>1</Text></Number>
          <Number onPress={()=>{calculate(".", result)}}><Text>.</Text></Number>        
        </ContentNumbers>
        <ContentNumbers>
          <Number onPress={()=>{calculate("8", result)}}><Text>8</Text></Number>
          <Number onPress={()=>{calculate("5", result)}}><Text>5</Text></Number>
          <Number onPress={()=>{calculate("2", result)}}><Text>2</Text></Number>
          <Number onPress={()=>{calculate("0", result)}}><Text>0</Text></Number>
        </ContentNumbers>
        <ContentNumbers>
          <Number onPress={()=>{calculate("9", result)}}><Text>9</Text></Number>
          <Number onPress={()=>{calculate("6", result)}}><Text>6</Text></Number>
          <Number onPress={()=>{calculate("3", result)}}><Text>3</Text></Number>
          <Number onPress={()=>{calculate("=", result)}}><Text>=</Text></Number>
        </ContentNumbers>
        <ContentNumbers>
          <Number onPress={()=>{calculate("/", result)}}><Text>/</Text></Number>
          <Number onPress={()=>{calculate("*", result)}}><Text>x</Text></Number>      
          <Number onPress={()=>{calculate("-", result)}}><Text>-</Text></Number>
          <Number onPress={()=>{calculate("+", result)}}><Text>+</Text></Number>
        </ContentNumbers>
      </Content>
    </Container>
  );
}

export default Calculator; 

