import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';

export const EntireContainer = styled.div<{
  homebar?: boolean;
  background?: string;
}>`
  padding: 25px 30px;
  background: ${({ background }) => (background ? background : Palette.White)};
  height: ${({ homebar }) =>
    homebar ? 'calc(100vh - 156px)' : 'calc(100vh - 60px)'};
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  // 마이페이지
  .mypage-submenu-container {
    padding: 40px 0px;
  }
  .mypage-submenu-subcontainer {
    height: fit-content;
    background: ${Palette.White};
    border-radius: 10px;
  }
  .mypage-list-container {
    display: flex;
    flex-direction: column;
    padding: 25px 0px 5px 0px;
    gap: 15px;
  }
`;

interface divProps {
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
}

export const Row = styled.div<divProps>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'initial')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'initial'};
`;
export const Column = styled.div<divProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'initial')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'initial'};
`;

export const MyPageBoxContainer = styled.div<{
  height?: string;
  padding?: string;
  borderRadius?: number;
}>`
  display: flex;
  width: 100%;
  height: ${({ height }) => (height ? height : 'fit-content')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}px;
  padding: ${({ padding }) => (padding ? padding : 0)};
  background: ${Palette.White};
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const TextContainer = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
`;

export const StyledLink = styled(Link)<{ color?: string }>`
  text-decoration: none;
  color: ${({ color }) => (color ? color : Palette.Black)};
`;
