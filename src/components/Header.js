import { AZULCLARO, LARANJA } from "../constants/colors"
import styled from "styled-components";

export default function Header() {
    return (
        <StyledHeader>
            <h1>CINEFLEX</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 375px;
    height: 67px;
    background-color: ${AZULCLARO};
    h1{
        color: ${LARANJA}
    }
`