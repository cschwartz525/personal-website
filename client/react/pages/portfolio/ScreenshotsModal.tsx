import React, { memo } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Wrapper = styled.div`
    background-color: ${colors.semiTransparentBlack};
    bottom: 0;
    display: none;
    left: 0;
    padding: 5%;
    position: absolute;
    right: 0;
    top: 0;
`;

const CloseButton = styled.button`
    align-items: center;    
    background: none;
    border: none;
    border-radius: 50%;
    color: ${colors.white};
    cursor: pointer;
    display: flex;
    height: 25px;
    justify-content: center;
    position: absolute;
    right: 20px;
    top: 20px;
    width: 25px;
    z-index: 11;

    &:hover {
        background: ${colors.white};
        color: ${colors.black};
    }

    @media (max-width: 400px) {
        right: 5px;
        top: 5px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4%;
    overflow-y: auto;
    z-index: 10;
`;

const Screenshot = styled.img`
    height: auto;
    max-width: 48%;

    @media (max-width: 900px) {
        max-width: 100%;
    }
`;

type ModalProps = {
    images: string[],
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const Modal = ({ images, isOpen, setIsOpen }: ModalProps): JSX.Element => (
    <Wrapper style={{ display: isOpen? 'flex' : 'none' }}>
        <CloseButton aria-label="Close modal" onClick={() => setIsOpen(false)}>X</CloseButton>
        <Content>
            {images.map((image) => <Screenshot src={image} />)}
        </Content>
    </Wrapper>
);

export default memo(Modal);