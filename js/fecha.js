export const formatoFecha = (fecha) => {
    const fechaSplit = fecha.split("-");
    const fechaFormato = `${fechaSplit[2]}/${fechaSplit[1]}/${fechaSplit[0]}`;
    return fechaFormato;
    }