import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1; 
    background-color: #000;
`;

export const Content = styled.View`
    flex:1; 
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`;

export const ContentNumbers = styled.View``;

export const Number = styled.TouchableOpacity`
    width: 80;
    height: 85;
    background-color: #666;
    margin: 3px;
    padding: 16px;
`;

export const Text = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 36;
`;

export const Result = styled.Text`
    color: #fff;
    background-color: #666;
    text-align: right;
    margin: 10px;
    padding: 16px;
    font-size: 36;
`;

export const ContainerResult = styled.View`
    flex-direction: row;
    margin: 10px;
    justify-content: space-between;     
    background-color: #666;
    text-align: right;
    font-size: 36;
`;
