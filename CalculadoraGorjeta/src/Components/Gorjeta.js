import React, {useState, useEffect} from 'react';
//import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const HeaderText = styled.Text`
  width: 100%;
  text-align: center;
  font-size: 25px;
  background-color: #2050a2;
  padding: 20px 0;
  font-weight: bold;
  border: 2px solid #21255b;
  color: #fff;
  border-radius: 5px;
`;

const Input = styled.TextInput`
  width: 100%;
  background-color: #ececec;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  border-radius: 5px;
`;

const CalcButton = styled.Button`
  margin-top: 15px;
`;

const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Resultitem = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px 0;
  justify-content: center;
`;

const PctItem = styled.Button`
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
  background-color: #eee;
  border: 1px solid #000;
`;

export default () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState();
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if (nBill) {
      setTip((pct / 100) * nBill);
    } else {
      alert('digite o valor da conta');
    }
  };

  useEffect(() => {
    calc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pct]);

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Qual o valor da Conta ?"
        placeholderTextColor="#6b6262"
        keyboardType="numeric"
        value={bill}
        onChangeText={(n) => setBill(n)}
      />

      <PctArea>
        <PctItem title="5%" onPress={() => setPct(5)} />
        <PctItem title="10%" onPress={() => setPct(10)} />
        <PctItem title="15%" onPress={() => setPct(15)} />
        <PctItem title="20%" onPress={() => setPct(20)} />
      </PctArea>

      <CalcButton title={`Calcular ${pct}%`} onPress={calc} />
      {tip > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <Resultitem>R$ {parseFloat(bill).toFixed(2)}</Resultitem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <Resultitem>
            R$ {tip.toFixed(2)} ({pct}%)
          </Resultitem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <Resultitem>R$ {(parseFloat(bill) + tip).toFixed(2)}</Resultitem>
        </ResultArea>
      )}
    </Page>
  );
};
