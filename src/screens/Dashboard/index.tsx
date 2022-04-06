import React from 'react'

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName
} from './styles'

export function Dashboard(){
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: "https://avatars.githubusercontent.com/u/85969658?v=4"}}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Maria</UserName>
            </User>
          </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  )
}



