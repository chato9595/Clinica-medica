export class Turno{
    constructor(paciente, especialidad,medico,fecha,hora,descripcion){
        this.id= Math.floor(Math.random()*1000);
        this.paciente = paciente;
        this.especialidad = especialidad;
        this.medico = medico;
        this.fecha = fecha;
        this.hora = hora;
        this.descripcion = descripcion;
    }
}