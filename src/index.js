import React from 'react';
import { Container, Content, ContentNumbers, Number, Text} from './styles';

const Calculator = () => {
  return (
    <Container>
      <Content>
        <ContentNumbers>
          <Number><Text>7</Text></Number>
          <Number><Text>4</Text></Number>
          <Number><Text>2</Text></Number>
          <Number><Text>.</Text></Number>        
        </ContentNumbers>
        <ContentNumbers>
          <Number><Text>8</Text></Number>
          <Number><Text>5</Text></Number>
          <Number><Text>2</Text></Number>
          <Number><Text>0</Text></Number>
        </ContentNumbers>
        <ContentNumbers>
          <Number><Text>9</Text></Number>
          <Number><Text>6</Text></Number>
          <Number><Text>3</Text></Number>
          <Number><Text>=</Text></Number>
        </ContentNumbers>
        <ContentNumbers>
          <Number><Text>/</Text></Number>
          <Number><Text>x</Text></Number>      
          <Number><Text>-</Text></Number>
          <Number><Text>+</Text></Number>
        </ContentNumbers>
      </Content>
    </Container>
  );
}

export default Calculator; 

