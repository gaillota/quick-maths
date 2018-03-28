import React, { Component } from 'react'

import Calculator from '../../modules/calculator/containers/Calculator'
import History from '../../modules/history/containers/History'

import Layout from '../Layout'
import Header from '../Header'
import Title from '../Title'
import Container from '../Container'
import Section from '../Section'
import CalculatorContainer from '../CalculatorContainer'
import HistoryContainer from '../HistoryContainer'
import Row from '../Row'

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <Title>
            Simple calculator
          </Title>
        </Header>
        <Container>
          <Section>
            <Row>
              <CalculatorContainer>
                <Calculator/>
              </CalculatorContainer>
              <HistoryContainer>
                <History/>
              </HistoryContainer>
            </Row>
          </Section>
        </Container>
      </Layout>
    )
  }
}

export default App
