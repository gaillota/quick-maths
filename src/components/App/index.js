import React, { Component } from 'react'

import Calculator from '../../modules/calculator/containers/Calculator'
import History from '../../modules/history/containers/History'

import Layout from '../Layout'
import Header from '../Header'
import Container from '../Container'
import Section from '../Section'
import Row from '../Row'
import Column from '../Column'

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          Simple calculator
        </Header>
        <Container>
          <Section>
            <Row>
              <Column>
                <Calculator/>
              </Column>
              <Column width='40%'>
                <History/>
              </Column>
            </Row>
          </Section>
        </Container>
      </Layout>
    )
  }
}

export default App
