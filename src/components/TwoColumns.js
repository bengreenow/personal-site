import styled from "styled-components";
// PARENT
export const TwoColumns = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
// CHILD
export const Column = styled.div`
    flex: 0 1 calc(49%);
    margin: 1rem 0.25em;
    @media (max-width: 50em) {
        flex: 0 1 calc(100%);
    }
`;
