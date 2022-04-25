import React, {useEffect} from "react";
import  AsyncStorage from "@react-native-async-storage/async-storage";

import { HistoryCard } from "../../components/HistoryCard";

import {
  Container, 
  Header,
  Title
} from './styles'

export function Resume(){
  
  async function loadData() {
    const dataKey = '@goFinances:transactions'
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : []

    const expensives = responseFormatted.filter(
      expensive => expensive.type === 'negative'
    )
  }

  useEffect(() => {
    loadData()
  },[])

  return(
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

    <HistoryCard 
      title="Compras"
      amount="R$ 150,00"
      color="red"
    />

    </Container>
  )
}