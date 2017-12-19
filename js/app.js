function buscar(){ //indica el total de alumnas por sede y generacion
 var sede=document.getElementById('sede').value;
 var generacion=document.getElementById('generacion').value;
 var students=0;
 var activeTrue=0;
 var activeFalse=0;
 for (var i in data[sede][generacion].students){ //recorre la data
   students=students+1;
   if(data[sede][generacion].students[i].active === true){//verifica si la alumna esta activa
     activeTrue=activeTrue+1
   }else{
     activeFalse=activeFalse+1
   }
 }
 //mostrando total de alumnas activas en html
var element=document.createElement("p"); 
var result=document.createTextNode('Total de alumnas activas= '+ activeTrue);
element.appendChild(result);
document.getElementById("active").appendChild(element);
element.classList.add("students");
}

function desercion(){ //porcentaje de desercion
 var sede=document.getElementById('sede').value;
 var generacion=document.getElementById('generacion').value;
 var students=0;
 var activeTrue=0;
 var activeFalse=0;
 for (var i in data[sede][generacion].students){ //verificando alumnas activas
   students=students+1;
   if(data[sede][generacion].students[i].active === true){
     activeTrue=activeTrue+1
   }else{
     activeFalse=activeFalse+1
   }
 }
 //mostrando resultados de desercion en html
var element=document.createElement("p");
var element2=document.createElement("p");
var element3=document.createElement("p");
var result=document.createTextNode('Total de alumnas activas= '+ activeTrue);
var result2=document.createTextNode('Total de alumnas que desertaron= '+ activeFalse);
var result3=document.createTextNode('Porcentaje de deserción= '+ ((activeFalse *100)/students).toFixed(2) +'%');
element.appendChild(result);
element2.appendChild(result2);
element3.appendChild(result3);
document.getElementById("percent-desert").appendChild(element);
document.getElementById("percent-desert").appendChild(element2);
document.getElementById("percent-desert").appendChild(element3);
element.classList.add("students");
element2.classList.add("students");
element3.classList.add("students");
}

function promProf(){ //calculando el promedio del profesor
  var sede=document.getElementById('sede').value;
  var generacion=document.getElementById('generacion').value;
  avgTeacher=0;
  for (var i in data[sede][generacion].ratings){ //accediendo a ratings para obter calificaciones del profesor
    avgTeacher=avgTeacher+data[sede][generacion].ratings[i].teacher/data[sede][generacion].ratings.length;
  }
  //mostrando promedio del profesor en html
  var element=document.createElement("p");
  var result=document.createTextNode('promedio de profesor= ' + avgTeacher.toFixed(2));
  element.appendChild(result);
  document.getElementById("prof").appendChild(element);
  element.classList.add("staff");
}

function promJedi(){ //calculando promedio del Jedi
  var sede=document.getElementById('sede').value;
  var generacion=document.getElementById('generacion').value;
  avgJedi=0;
  for (var i in data[sede][generacion].ratings){ //recorriendo ratings para obtener calificaciones del Jedi
    avgJedi=avgJedi+data[sede][generacion].ratings[i].jedi/data[sede][generacion].ratings.length; //calculando el promedio
  }
  //mostrando promedio de Jedi
  var element=document.createElement("p");
  var result=document.createTextNode('promedio de jedi= ' + avgJedi.toFixed(2));
  element.appendChild(result);
  document.getElementById("jedi").appendChild(element);
  element.classList.add("staff");
}

function satisfaccion(){ //calculando porcentaje de satisfaccion con Laboratoria
  var sede=document.getElementById('sede').value;
  var generacion=document.getElementById('generacion').value;
  var sumSat=0;
  var sumAlumSatisfechas=0;
  for (var i in data[sede][generacion].ratings){//accediendo a ratings para obtener el numero de alumnas satisfechas
    sumSat=sumSat+data[sede][generacion].ratings[i].student['no-cumple']+data[sede][generacion].ratings[i].student['cumple']+data[sede][generacion].ratings[i].student['supera'];
    sumAlumSatisfechas=sumAlumSatisfechas+data[sede][generacion].ratings[i].student['cumple']+data[sede][generacion].ratings[i].student['supera'];
  }
  //mostrando el promedio de satisfaccion
  var element=document.createElement("p");
  var element2=document.createElement("p");
  var element3=document.createElement("p");
  var result=document.createTextNode("Total de alumnas: " + sumSat);
  var result2=document.createTextNode("Total de alumnas satisfechas: " + sumAlumSatisfechas);
  var result3=document.createTextNode("Poecentaje de alumnas satisfechas: " + (sumAlumSatisfechas*100)/sumSat + "%");
  element.appendChild(result);
  element2.appendChild(result2);
  element3.appendChild(result3);
  document.getElementById("percent-satifac").appendChild(element);
  document.getElementById("percent-satifac").appendChild(element2);
  document.getElementById("percent-satifac").appendChild(element3);
  element.classList.add("students");
  element2.classList.add("students");
  element3.classList.add("students");
}

function promedio2(){ //calculando promedio general
  var sede=document.getElementById('sede').value;
  var generacion=document.getElementById('generacion').value;
  var sumMeta=0;
  var active=0;
  for (var i in data[sede][generacion].students){
    var avgTec=0;
    var avgHse=0;
    var totalPuntos=1700+1200;
    if(data[sede][generacion].students[i].active === true){
      active=active+1;
    }
    var numSprint=data[sede][generacion].students[i].sprints.length;
    for(var j=0; j<numSprint; j++){ //obteniendo calificaciones por sprint 
      avgTec=avgTec+data[sede][generacion].students[i].sprints[j].score.tech/numSprint; //calculando promedio TC
      avgHse=avgHse+data[sede][generacion].students[i].sprints[j].score.hse/numSprint; //calculando promedio HSE
    }
    var avgGeneral=(avgTec+avgHse)/2
    porcentaje=((avgGeneral*100)/totalPuntos); //calculando promedio general
    if(porcentaje>=70){ //validando si se alcanza la meta
      sumMeta=sumMeta+1;
    }
    
  }
  //mostrando el promedio general de las alumnas en html
    var element=document.createElement("p");
    var result=document.createTextNode('Total de alumnas activas='+active);
    element.appendChild(result);
    document.getElementById("general").appendChild(element);
    var element2=document.createElement("p");
    var result2=document.createTextNode ('Total de alumnas que lograron la meta='+sumMeta);
    element2.appendChild(result2);
    document.getElementById("general").appendChild(element2);
    var element3=document.createElement("p");
    var result3=document.createTextNode ('Total de alumnas que lograron la meta='+sumMeta);
    element3.appendChild(result3);
    document.getElementById("general").appendChild(element3);
    element.classList.add("evaluations");
    element2.classList.add("evaluations");
    element3.classList.add("evaluations");
}

function techEvaluation(){ //calculando evaluacion tecnica en promedio o sprint
  if(document.getElementById('sprint').value.length>1){
    techAverage();
  }else{
    var sede=document.getElementById('sede').value;
    var generacion=document.getElementById('generacion').value;
    var sprint=document.getElementById('sprint').value;
    var sumMeta=0;
    var nAlumnas=0;
    var totalMeta=0;
    var totalPuntos=1700;
    sprint=document.getElementById('sprint').value-1;
    for (var i in data[sede][generacion].students){ 
      nAlumnas=nAlumnas+1;
      var numSprint=data[sede][generacion].students[i].sprints.length; //obteniendo calificacion tecnica
      var porcentaje=((data[sede][generacion].students[i].sprints[sprint].score.tech*100)/totalPuntos).toFixed(2); //obteniendo porcentaje
      if(porcentaje>=70){ //validando si se alcanza la meta
        totalMeta=totalMeta+1;
      }
    }
    //mostrando las evaluaciones TC
    var element=document.createElement("p");
    var element2=document.createElement("p")
    var element3=document.createElement("p");
    var result=document.createTextNode('N° de Alumnas: ' + nAlumnas);
    var result2=document.createTextNode('N° de Alumnas que lograron la meta= ' + totalMeta);
    var result3=document.createTextNode('% Alumnas que lograron la meta= ' + ((totalMeta*100)/nAlumnas).toFixed(2)+'%');
    element.appendChild(result);
    element2.appendChild(result2);
    element3.appendChild(result3);
    document.getElementById("tech").appendChild(element);
    document.getElementById("tech").appendChild(element2);
    document.getElementById("tech").appendChild(element3);
    element.classList.add("evaluations");
    element2.classList.add("evaluations");
    element3.classList.add("evaluations");
  }
}

function techAverage(){
  var sede=document.getElementById('sede').value;
  var generacion=document.getElementById('generacion').value;
  var sumMeta=0;
  var nAlumnas=0;
  for (var i in data[sede][generacion].students){
    var avgTec=0;
    var totalPuntos=1700;
    nAlumnas=nAlumnas+1;
    var numSprint=data[sede][generacion].students[i].sprints.length;
    for(var j=0; j<data[sede][generacion].students[i].sprints.length; j++){
      avgTec=avgTec+data[sede][generacion].students[i].sprints[j].score.tech/numSprint;
    }
    porcentaje=(avgTec*100)/totalPuntos;
    if(porcentaje>=70){
      sumMeta=sumMeta+1;
    }
  }
}

function hseEvaluation(){
  if(document.getElementById('sprint').value.length>1){
    hseAverage();
  }else{
    var sede=document.getElementById('sede').value;
    var generacion=document.getElementById('generacion').value;
    var sprint=document.getElementById('sprint').value;
    var sumMeta=0;
    var nAlumnas=0;
    var totalMeta=0;
    var totalPuntos=1200;
    sprint=document.getElementById('sprint').value-1;
    console.log('Sprint '+(sprint+1));
    for (var i in data[sede][generacion].students){
      nAlumnas=nAlumnas+1;
      var numSprint=data[sede][generacion].students[i].sprints.length;
      var porcentaje=((data[sede][generacion].students[i].sprints[sprint].score.hse*100)/totalPuntos).toFixed(2);
      if(porcentaje>=70){
        totalMeta=totalMeta+1;
      }
    }
    var element=document.createElement("p");
    var result=document.createTextNode('N° de Alumnas='+nAlumnas);
    element.appendChild(result);
    document.getElementById("hse").appendChild(element);
    var element2=document.createElement("p");
    var result2=document.createTextNode('N° de Alumnas que lograron la meta= '+totalMeta);
    element2.appendChild(result2);
    document.getElementById("hse").appendChild(element2);
    var element3=document.createElement("p");
    var result3=document.createTextNode('% Alumnas que lograron la meta='+((totalMeta*100)/nAlumnas).toFixed(2)+'%')
    element3.appendChild(result3);
    document.getElementById("hse").appendChild(element3);  
    element.classList.add("evaluations");
    element2.classList.add("evaluations");
    element3.classList.add("evaluations");
  }
}

function hseAverage(){
  var sede=document.getElementById('sede').value;
  var generacion=document.getElementById('generacion').value;
  var sumMeta=0;
  var nAlumnas=0;
  for (var i in data[sede][generacion].students){
    var avgHse=0;
    var totalPuntos=1200;
    nAlumnas=nAlumnas+1;
    var numSprint=data[sede][generacion].students[i].sprints.length;
    for(var j=0; j<data[sede][generacion].students[i].sprints.length; j++){
      avgHse=avgHse+data[sede][generacion].students[i].sprints[j].score.hse/numSprint;
    }
    porcentaje=(avgHse*100)/totalPuntos;
    if(porcentaje>=70){
      sumMeta=sumMeta+1;
    }
  }
}

function cargarSedes() {
  var sedes=[];
  for (var i in data){
    sedes.push(i);
  }
  addOptions("sede", sedes);
}

//Función para agregar opciones a un <select>.
function addOptions(domElement,sedes) {
  var selector = document.getElementsByName(domElement)[0];
  for (sede in sedes) {
    var opcion = document.createElement("option");
    opcion.text = sedes[sede];
    opcion.value = sedes[sede];
    selector.add(opcion);
  }
}

function cargarGeneracion() {
    var listaGeneraciones = {
      AQP: ["2016-2", "2017-1"],
      CDMX: ["2017-1", "2017-2"],
      LIM: ["2016-2", "2017-1", "2017-2"],
      SCL: ["2016-2", "2017-1", "2017-2"]
    }
    var sedes = document.getElementById('sede')
    var generaciones = document.getElementById('generacion')
    var sedeSeleccionada = sedes.value
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
      var listaSprint = {
        '2016-2':[1,2,3,4,"Todos los sprints"],
        '2017-1':[1,2,3,4,"Todos los sprints"],
        '2017-2':[1,2,3,4,"Todos los sprints"]
      }
      var sedes = document.getElementById('generacion')
      var generaciones = document.getElementById('sprint')
      var sedeSeleccionada = generacion.value
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
