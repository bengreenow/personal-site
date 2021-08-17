import styled from "styled-components";
import { CORNER_RADIUS, SANS_SERIF_FONT } from "./Constants";

export const Chip = styled.span`
    ${SANS_SERIF_FONT}
    display:inline-block;
    background: #777;
    color: white;
    padding: 0.4rem;
    border-radius: ${CORNER_RADIUS};
    margin: 0.2rem 0.4rem 0.2rem 0;
    font-size: 0.9rem;
`;
