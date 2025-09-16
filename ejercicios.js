import {stdin, stdout} from 'process';
import readline from 'readline';

const rd = readline.createInterface({
    input: stdin,
    output: stdout
});


// Ejercicio 1: Perfil Personal 
// Crear un objeto que represente tu perfil personal con: 
// • Información básica (nombre, edad, carrera) 
// • Dirección (objeto anidado) 
// • Hobbies (array) 
// • Redes sociales (objeto con diferentes plataformas)

const perfil={
    Info:{
        Nombre: "Yamileth",
        Edad: "19 años",
        Carrera: "Ing.Desarrollo de Software",
        Direccion: {
            Pais: "El Salvador",
           Municipio: "Quelepa",
        }
    } ,
    Hobbies:["Fotografia", "Ver series", "Caminar"],
    Redes: {
        Ig:"@mily",
        Fb:"Mily",
        Tiktok:"yami1"
}  
}

console.log(perfil)

// Ejercicio 2: Registro de Calificaciones 
// Crear un sistema que maneje: 
// • Array de materias con sus calificaciones 
// • Método para calcular promedio 
// • Método para determinar estado académico

const calif={
    Materias:[
       {materia: "Sistemas", nota: 8.9},
       {materia: "Tecnicas", nota: 7.8},
       {materia: "Ingles", nota: 9}
    ],
    promedio: function() {
        let suma = this.Materias.reduce((acc,Materias) => acc + Materias.nota, 0);
        return (suma / this.Materias.length).toFixed(2);
    },
    estadoAcademico:function () {
        let promedio = parseFloat(this.promedio());
    
    if(promedio = 8.4) {
        return  "Aprobado";
    } else {
        return  "Reprobado";
         }
    }

}
console.log("Promedio:", calif.promedio());
console.log("Estado Academico:", calif.estadoAcademico());

// Ejercicio 3: Lista de Tareas 
// Implementar un sistema de tareas pendientes con: 
// • Array de tareas (objetos con título, descripción, completada) 
// • Método para marcar como completada

const ListaTareas={
    Tareas:[
        {titulo: "Objetos y arrays en Javascript", 
        Descripcion: " La guía constara de algunos ejercicios que buscaran poner a prueba tus capacidades a través de preguntas y el pensamiento crítico, además de algunos ejercicios para los cuales se busca que apliquen la lógica y la resolución de problemas a través de algoritmos. ",
        Completada: false},
        {titulo:"Manipulación de cadenas en JS",
         Descripcion: "Aplicar los diferentes métodos para el tratamiento de cadenas", 
         Completada: true},
    ],
     tareasCompletadas: function(titulo){
        let tarea = this.Tareas.find(t => t.titulo === titulo)
       if (!tarea) return "tarea no encontrada"
       tarea.Completada = true
       return `la tarea "${tarea.titulo}" se a marcado como completada`
     }, 
     
     tareasPendientes: function(){
        return this.Tareas.filter(t => !t.Completada)
     }
}
console.log(ListaTareas.tareasCompletadas("Manipulación de cadenas en JS"))
console.log("Las tareas pendientes son:", ListaTareas.tareasPendientes())