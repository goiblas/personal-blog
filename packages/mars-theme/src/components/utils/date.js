import React from "react";
import { styled } from "frontity";

const monthNames = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre",
    "Octubre", "Noviembre", "Diciembre"
  ];

const DateFormat = ({date}) => {

    const currentDate = new Date(date);

    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return (
        <Time dateTime={currentDate.toLocaleDateString('en-US')}>{day} de {month} de {year}</Time>
    );
};

export default DateFormat;

const Time = styled.time`
    color: var(--color-text-light);
    font-size: 13px;
`;
