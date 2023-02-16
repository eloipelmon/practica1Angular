import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  pEscuela:string="Soy Julián, tengo 3 años y voy a la escuela San Javier Salvador.";
  pEscuela2:string="En mi escuela aprendo inglés, plástica, huerto y cuentos de lunes a viernes de 9:00 a 13:00. Tengo una clase fantástica y muchos amigos, entre ellos Martín (mi mejor amigo), con el que hago extraescolares de boxeo y Laura (mi mejor amiga), con la que hago extraescolares de Ajedrez";
  horario: timetableInterface[] = [
                                  {hora: '09:00-10:00', 
                                  horaLunes: "Plástica", 
                                  horaMartes: "Huerto", 
                                  horaMiercoles: "Inglés",
                                  horaJueves: "Cuentos",
                                  horaViernes: "Plástica"},
                                
                                  {hora: '10:00-11:00', 
                                  horaLunes: "PATIO", 
                                  horaMartes: "PATIO", 
                                  horaMiercoles: "Huerto",
                                  horaJueves: "PATIO",
                                  horaViernes: "Inglés"},

                                  {hora: '11:00-12:00', 
                                  horaLunes: "Huerto", 
                                  horaMartes: "Plástica", 
                                  horaMiercoles: "PATIO",
                                  horaJueves: "Inglés",
                                  horaViernes: "PATIO"},

                                  {hora: '12:00-13:00', 
                                  horaLunes: "Inglés", 
                                  horaMartes: "Inglés", 
                                  horaMiercoles: "Plástica",
                                  horaJueves: "Plástica",
                                  horaViernes: "Huerto"}
                                ];
   pAjedrez:string="A veces, me gusta empezar con mi peón de rey, y otras veces con el de la reina. Depende de cómo me sienta ese día. Me gusta pensar en varias opciones de movimientos, para que pueda sorprender a mi oponente y hacer un buen movimiento.";
   pAjedrez2:string="Cuando juego, trato de estar atento a los movimientos de mi oponente y cómo pueden afectar mis próximos movimientos. Si veo que mi oponente está tratando de controlar el centro del tablero, trato de pensar en cómo puedo contrarrestarlo.";
   pAjedrez3:string="A veces, hago errores, pero trato de aprender de ellos. Me gusta jugar con otros niños y aprender de ellos también. Jugar ajedrez me ayuda a pensar estratégicamente, a ser paciente y a concentrarme. Es un juego muy divertido y siempre estoy emocionado por jugar más.";

   pBoxeo:string="Cuando empiezo a boxear, trabajo en mi técnica y en mi velocidad. Practico golpear el saco de boxeo, hacer movimientos de esquiva y trabajar en mi guardia. Mi entrenador me ayuda a perfeccionar mi técnica y me corrige cuando cometo errores.";
   pBoxeo2:string="También hago ejercicios para mejorar mi fuerza y resistencia, como saltar la cuerda, hacer flexiones y sentadillas. Esto me ayuda a estar en buena forma física y tener la energía suficiente para los entrenamientos y combates.";
   pBoxeo3:string="Durante las sesiones de sparring, practico con otros niños para mejorar mis habilidades en un ambiente más realista. Aprendo a leer los movimientos de mi oponente y a anticipar sus movimientos. También aprendo a recibir golpes y a mantener la compostura durante un combate.";
   pBoxeo4:string="El boxeo me enseña disciplina, perseverancia y respeto hacia los demás. Me ayuda a tener confianza en mí mismo y a estar en buena forma física. Me encanta boxear y estoy emocionado por seguir mejorando mis habilidades.";
  }


export interface timetableInterface{
  hora: string, 
  horaLunes:  string, 
  horaMartes:  string, 
  horaMiercoles: string, 
  horaJueves:  string, 
  horaViernes:  string
}

