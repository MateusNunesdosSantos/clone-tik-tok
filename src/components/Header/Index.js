import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar,
} from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src="/images/uploadIcon.svg"></Icon>
          <Avatar>
            <img src="/images/user.jpg" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
};

export default Header;
