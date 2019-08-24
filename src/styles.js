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