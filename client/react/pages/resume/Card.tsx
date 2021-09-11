import React, { memo } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    margin: 10px auto;
`;

const TopContainer = styled.div`
    background: linear-gradient(to right, #cf8800, #eecc00);
    border-radius: 10px 10px 0 0;
    padding: 10px;
`;

const BottomContainer = styled.div`
    background: linear-gradient(to right, #dddddd, #ffffff);
    border-radius: 0 0 10px 10px;
    box-shadow: 0 3px 0 #aaaaaa;
    padding: 10px;
`;

type CardProps = {
    endDate: string;
    heading: string;
    notes: string[];
    subheading: string;
    startDate: string;
    summary: string;
};

const Card = ({
    endDate,
    heading,
    notes = [],
    startDate,
    subheading,
    summary
}: CardProps): JSX.Element => (
    <CardContainer>
        <TopContainer>
            <h2>{heading}</h2>
            <h3>{subheading}</h3>
            <h4>{startDate} - {endDate}</h4>
        </TopContainer>
        <BottomContainer>
            <p>{summary}</p>
            <ul>
                {
                    notes.map((note, index) => (
                        <li key={`note-${index}`}>{note}</li>
                    ))
                }
            </ul>
        </BottomContainer>
    </CardContainer>
);

export default memo(Card);