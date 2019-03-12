const element = document.createElement("p");
const element2 = document.createElement("p");
const element3 = document.createElement("p");
const desert = document.getElementById("percent-desert");
const satisfaction = document.getElementById("percent-satifac");
const general = document.getElementById("general");
const tech = document.getElementById("tech");
const hse = document.getElementById("hse");

//indica el total de alumnas por sede y generacion
function buscar(){
  const sede = document.getElementById('sede').value;
  const generacion = document.getElementById('generacion').value;
  let students = 0;
  let activeTrue = 0;
  let activeFalse = 0;
  //recorre la data
  for (const i in data[sede][generacion].students){ 
    students=students+1;
    //verifica si la alumna esta activa
    if(data[sede][generacion].students[i].active === true){
      activeTrue=activeTrue+1
    } else{
      activeFalse=activeFalse+1
    }
}

 //mostrando total de alumnas activas en html
const result =document.createTextNode('Total de alumnas activas = ' + activeTrue);
element.appendChild(result);
document.getElementById("active").appendChild(element);
element.classList.add("students");
}

//porcentaje de desercion
function desercion(){ 
  const sede=document.getElementById('sede').value;
  const generacion=document.getElementById('generacion').value;
  let students=0;
  let activeTrue=0;
  let activeFalse=0;
  //verificando alumnas activas
  for (const i in data[sede][generacion].students){ 
    students=students+1;
    if(data[sede][generacion].students[i].active === true){
      activeTrue=activeTrue+1
    }else{
      activeFalse=activeFalse+1
    }
  }

//mostrando resultados de desercion en html
const result2 = document.createTextNode('Total de alumnas que desertaron = ' + activeFalse);
const result3 = document.createTextNode('Porcentaje de deserción = ' + ((activeFalse *100)/students).toFixed(2) +'%');
element2.appendChild(result2);
element3.appendChild(result3);
desert.appendChild(element2);
desert.appendChild(element3);
element2.classList.add("students");
element3.classList.add("students");
}

//calculando el promedio del profesor
function promProf(){ 
  const sede = document.getElementById('sede').value;
  const generacion = document.getElementById('generacion').value;
  avgTeacher=0;
  //accediendo a ratings para obter calificaciones del profesor
  for (const i in data[sede][generacion].ratings){ 
    avgTeacher=avgTeacher+data[sede][generacion].ratings[i].teacher/data[sede][generacion].ratings.length;
  }
  //mostrando promedio del profesor en html
  const result = document.createTextNode('promedio de profesor = ' + avgTeacher.toFixed(2));
  element.appendChild(result);
  document.getElementById("prof").appendChild(element);
  element.classList.add("staff");
}

//calculando promedio del Jedi
function promJedi(){ 
  const sede = document.getElementById('sede').value;
  const generacion = document.getElementById('generacion').value;
  avgJedi=0;
  //recorriendo ratings para obtener calificaciones del Jedi
  for (const i in data[sede][generacion].ratings){ 
    //calculando el promedio
    avgJedi=avgJedi+data[sede][generacion].ratings[i].jedi/data[sede][generacion].ratings.length; 
  }
  //mostrando promedio de Jedi
  const result=document.createTextNode('promedio de jedi = ' + avgJedi.toFixed(2));
  element.appendChild(result);
  document.getElementById("jedi").appendChild(element);
  element.classList.add("staff");
}

//calculando porcentaje de satisfaccion con Laboratoria
function satisfaccion(){ 
  const sede=document.getElementById('sede').value;
  const generacion=document.getElementById('generacion').value;
  let sumSat=0;
  let sumAlumSatisfechas=0;
  //accediendo a ratings para obtener el numero de alumnas satisfechas
  for (const i in data[sede][generacion].ratings){
    sumSat=sumSat+data[sede][generacion].ratings[i].student['no-cumple']+data[sede][generacion].ratings[i].student['cumple']+data[sede][generacion].ratings[i].student['supera'];
    sumAlumSatisfechas=sumAlumSatisfechas+data[sede][generacion].ratings[i].student['cumple']+data[sede][generacion].ratings[i].student['supera'];
  }
  //mostrando el promedio de satisfaccion
  const result2 = document.createTextNode("Total de alumnas satisfechas: " + sumAlumSatisfechas);
  const result3 = document.createTextNode("Poecentaje de alumnas satisfechas: " + (sumAlumSatisfechas*100)/sumSat + "%");
  element2.appendChild(result2);
  element3.appendChild(result3);
  satisfaction.appendChild(element2);
  satisfaction.appendChild(element3);
  element2.classList.add("students");
  element3.classList.add("students");
}

//calculando promedio general
function promedio2(){
  const sede=document.getElementById('sede').value;
  const generacion=document.getElementById('generacion').value;
  let sumMeta=0;
  let active=0;
  for (const i in data[sede][generacion].students){
    let avgTec=0;
    let avgHse=0;
    let totalPuntos = 1700+1200;
    if(data[sede][generacion].students[i].active === true){
      active=active+1;
    }
    const numSprint=data[sede][generacion].students[i].sprints.length;
    //obteniendo calificaciones por sprint
    for(let j = 0; j<numSprint; j++){ 
      //calculando promedio TC
      avgTec=avgTec+data[sede][generacion].students[i].sprints[j].score.tech/numSprint; 
      //calculando promedio HSE
      avgHse=avgHse+data[sede][generacion].students[i].sprints[j].score.hse/numSprint; 
    }
    const avgGeneral=(avgTec+avgHse)/2
    //calculando promedio general
    porcentaje=((avgGeneral*100)/totalPuntos); 
    //validando si se alcanza la meta
    if(porcentaje>=70){ 
      sumMeta=sumMeta+1;
    }

  }
//mostrando el promedio general de las alumnas en html
    const result = document.createTextNode('Total de alumnas activas =' + active);
    element.appendChild(result);
    general.appendChild(element);
    const result2 = document.createTextNode ('Total de alumnas que lograron la meta =' + sumMeta);
    element2.appendChild(result2);
    general.appendChild(element2);
    const result3 = document.createTextNode ('Porcentaje de alumnas que lograron la meta =' + ((sumMeta*100)/active).toFixed(2)+'%');
    element3.appendChild(result3);
    general.appendChild(element3);
    element.classList.add("evaluations");
    element2.classList.add("evaluations");
    element3.classList.add("evaluations");
}

//calculando evaluacion tecnica en promedio o sprint
function techEvaluation(){ 
  if(document.getElementById('sprint').value.length>1){
    techAverage();
  }else{
    const sede = document.getElementById('sede').value;
    const generacion = document.getElementById('generacion').value;
    let sprint = document.getElementById('sprint').value;
    let sumMeta = 0;
    let nAlumnas = 0;
    let totalMeta = 0;
    let totalPuntos = 1700;
    sprint = document.getElementById('sprint').value-1;
    for (var i in data[sede][generacion].students){
      nAlumnas=nAlumnas+1;
      //obteniendo calificacion tecnica
      var numSprint=data[sede][generacion].students[i].sprints.length; 
      //obteniendo porcentaje
      var porcentaje=((data[sede][generacion].students[i].sprints[sprint].score.tech*100)/totalPuntos).toFixed(2); 
      //validando si se alcanza la meta
      if(porcentaje>=70){ 
        totalMeta=totalMeta+1;
      }
    }
    //mostrando las evaluaciones TC
    const result=document.createTextNode('N° de Alumnas: ' + nAlumnas);
    const result2=document.createTextNode('N° de Alumnas que lograron la meta = ' + totalMeta);
    const result3=document.createTextNode('% Alumnas que lograron la meta = ' + ((totalMeta*100)/nAlumnas).toFixed(2)+'%');
    element.appendChild(result);
    element2.appendChild(result2);
    element3.appendChild(result3);
    tech.appendChild(element);
    tech.appendChild(element2);
    tech.appendChild(element3);
    element.classList.add("evaluations");
    element2.classList.add("evaluations");
    element3.classList.add("evaluations");
  }
}

function techAverage(){
  const sede=document.getElementById('sede').value;
  let generacion=document.getElementById('generacion').value;
  let sumMeta=0;
  let nAlumnas=0;
  for (let i in data[sede][generacion].students){
    let avgTec=0;
    let totalPuntos=1700;
    nAlumnas=nAlumnas+1;
    const numSprint=data[sede][generacion].students[i].sprints.length;
    for(let j=0; j<data[sede][generacion].students[i].sprints.length; j++){
      avgTec=avgTec+data[sede][generacion].students[i].sprints[j].score.tech/numSprint;
    }
    porcentaje=(avgTec*100)/totalPuntos;
    if(porcentaje>=70){
      sumMeta=sumMeta+1;
    }
  }

}

//mostrando las evaluaciones HSE
function hseEvaluation(){
  if(document.getElementById('sprint').value.length>1){
    hseAverage();
  }else{
    const sede=document.getElementById('sede').value;
    const generacion=document.getElementById('generacion').value;
    let sprint=document.getElementById('sprint').value;
    let sumMeta=0;
    let nAlumnas=0;
    let totalMeta=0;
    let totalPuntos=1200;
    sprint=document.getElementById('sprint').value-1;
    for (let i in data[sede][generacion].students){
      nAlumnas=nAlumnas+1;
      let numSprint=data[sede][generacion].students[i].sprints.length;
      let porcentaje=((data[sede][generacion].students[i].sprints[sprint].score.hse*100)/totalPuntos).toFixed(2);
      if(porcentaje>=70){
        totalMeta=totalMeta+1;
      }
    }
    const result=document.createTextNode('N° de Alumnas='+nAlumnas);
    element.appendChild(result);
    hse.appendChild(element);
    const result2=document.createTextNode('N° de Alumnas que lograron la meta= '+totalMeta);
    element2.appendChild(result2);
    hse.appendChild(element2);
    const result3=document.createTextNode('% Alumnas que lograron la meta='+((totalMeta*100)/nAlumnas).toFixed(2)+'%')
    element3.appendChild(result3);
    hse.appendChild(element3);
    element.classList.add("evaluations");
    element2.classList.add("evaluations");
    element3.classList.add("evaluations");
  }
}

function hseAverage(){
  const sede=document.getElementById('sede').value;
  const generacion=document.getElementById('generacion').value;
  let sumMeta=0;
  let nAlumnas=0;
  for (let i in data[sede][generacion].students){
    let avgHse=0;
    let totalPuntos=1200;
    nAlumnas=nAlumnas+1;
    const numSprint=data[sede][generacion].students[i].sprints.length;
    for(let j=0; j<data[sede][generacion].students[i].sprints.length; j++){
      avgHse=avgHse+data[sede][generacion].students[i].sprints[j].score.hse/numSprint;
    }
    porcentaje=(avgHse*100)/totalPuntos;
    if(porcentaje>=70){
      sumMeta=sumMeta+1;
    }
  }
}

function cargarSedes() {
  const sedes=[];
  for (let i in data){
    sedes.push(i);
  }
  addOptions("sede", sedes);
}

//Función para agregar opciones a un <select>.
function addOptions(domElement,sedes) {
  const selector = document.getElementsByName(domElement)[0];
  for (sede in sedes) {
    const opcion = document.createElement("option");
    opcion.text = sedes[sede];
    opcion.value = sedes[sede];
    selector.add(opcion);
  }
}

function cargarGeneracion() {
    const listaGeneraciones = {
      AQP: ["2016-2", "2017-1"],
      CDMX: ["2017-1", "2017-2"],
      LIM: ["2016-2", "2017-1", "2017-2"],
      SCL: ["2016-2", "2017-1", "2017-2"]
    }
    const sedes = document.getElementById('sede')
    const generaciones = document.getElementById('generacion')
    let sedeSeleccionada = sedes.value
    // Se limpian las generaciones
    generaciones.innerHTML = '<option value="">Seleccione generación...</option>'
    if(sedeSeleccionada !== ''){
      // Se seleccionan las generaciones
      sedeSeleccionada = listaGeneraciones[sedeSeleccionada]
      // Se insertan las generaciones
      sedeSeleccionada.forEach(function(generacion){
        let opcion = document.createElement('option')
        opcion.value = generacion
        opcion.text = generacion
        generaciones.add(opcion)
      });
    }

  }

  function cargarSprint() {
      const listaSprint = {
        '2016-2':[1,2,3,4,"Todos los sprints"],
        '2017-1':[1,2,3,4,"Todos los sprints"],
        '2017-2':[1,2,3,4,"Todos los sprints"]
      }
      const generaciones = document.getElementById('sprint')
      let sedeSeleccionada = generacion.value
      // Se limpian sprints
      generaciones.innerHTML = '<option value="">Seleccione sprint...</option>'
      if(sedeSeleccionada !== ''){
        // Se seleccionan los sprint
        sedeSeleccionada = listaSprint[sedeSeleccionada]
        // Se insertan los s
        sedeSeleccionada.forEach(function(generacion){
          let opcion = document.createElement('option')
          opcion.value = generacion
          opcion.text = generacion
          generaciones.add(opcion)
        });
      }

    }
cargarSedes();