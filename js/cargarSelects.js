export const pacientesSelect = () => {
  let pacientesLS = JSON.parse(localStorage.getItem("Lista Pacientes"));
  const campoPaciente = document.getElementById("paciente");
  if (pacientesLS != null) {
    pacientesLS.forEach((paciente) => {
      let option = document.createElement("option");
      option.value = paciente.nombre;
      option.innerText = paciente.nombre;
      campoPaciente.appendChild(option);
    });
  }
};

export const medicosSelect = () => {
  let medicosLS = JSON.parse(localStorage.getItem("Lista Medicos"));
  const campoMedico = document.getElementById("medico");
  const campoEspecialidad = document.getElementById("especialidad");
  campoMedico.innerHTML = `<option value="0">Seleccione un médico</option>`;
  let medico = "";
  let especialidad = campoEspecialidad.value;
  switch (especialidad) {
    case "Ginecología":
      medico = medicosLS[0];
      break;
    case "Dermatología":
      medico = medicosLS[1];
      break;
    case "Nutrición":
      medico = medicosLS[2];
      break;
    case "Oncología":
      medico = medicosLS[3];
      break;
    case "Endocrinología":
      medico = medicosLS[4];
      break;
    default:
      break;
  }

  const opcion = document.createElement("option");
  opcion.value = medico.nombre + " " + medico.apellido;
  opcion.innerText = medico.nombre + " " + medico.apellido;
  campoMedico.appendChild(opcion);
};

export const horariosSelect = () => {
  const campoHorario = document.getElementById("horario");
  const campoFecha = document.getElementById("fechaTurno");
  const campoMedico = document.getElementById("medico");

  let horarios = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  let ocupados = [];
  let disponibles = [];

  let fecha = campoFecha.value;
  let medico = campoMedico.value;

  let turnosLS = JSON.parse(localStorage.getItem("Lista turnos"));
  console.log(turnosLS);
  let turnosOcupados = [];
  if (turnosLS != null) {
    turnosOcupados = turnosLS.filter((turno) => {
      return turno.fecha === fecha && turno.medico === medico;
    });
  }
  console.log(turnosOcupados);
  turnosOcupados.forEach((turno) => {
    ocupados.push(Number(turno.hora));
  });
  console.log(ocupados);
  
  horarios.forEach((horario) => {
    if (!ocupados.includes(horario)) {
      disponibles.push(horario);
    }
  });
  console.log(disponibles);

  disponibles.forEach((horario) => {
    const option = document.createElement("option");
    option.value = horario;
    option.innerText = horario + ":00";
    campoHorario.appendChild(option);
  });
};
