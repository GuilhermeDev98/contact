import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
`
export const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
  }
`

export const LogoTitle = styled.span`
  margin-left: 20px;
  font-weight: bolder;
  font-size: 16px;
`
