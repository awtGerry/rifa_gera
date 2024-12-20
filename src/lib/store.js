// Numbers store para la rifa
// 1-70 números

import { writable } from 'svelte/store';

export const numbers = writable([
  { number: 1, selected: 1, name: 'Adriana', showPerson: false },
  { number: 2, selected: 1, name: 'Ravel', showPerson: false },
  { number: 3, selected: 1, name: 'Montse' , showPerson: false },
  { number: 4, selected: 1, name: 'Adua' , showPerson: false },
  { number: 5, selected: 1, name: 'Cecy Torres' , showPerson: false },
  { number: 6, selected: 1, name: 'Luis Origel' , showPerson: false },
  { number: 7, selected: 1, name: 'Dinora' , showPerson: false },
  { number: 8, selected: 1, name: 'Adua' , showPerson: false },
  { number: 9, selected: 1, name: 'Montse' , showPerson: false },
  { number: 10, selected: 1, name: 'Maria del Carmen Lopez Uribe' , showPerson: false },
  { number: 11, selected: 1, name: 'Coco' , showPerson: false },
  { number: 12, selected: 1, name: 'Laura' , showPerson: false },
  { number: 13, selected: 1, name: 'Coco' , showPerson: false },
  { number: 14, selected: 1, name: 'Jona' , showPerson: false },
  { number: 15, selected: 1, name: 'Coco' , showPerson: false },
  { number: 16, selected: 1, name: 'Celina' , showPerson: false },
  { number: 17, selected: 1, name: 'Coco' , showPerson: false },
  { number: 18, selected: 1, name: 'Adriana' , showPerson: false },
  { number: 19, selected: 1, name: 'Montse' , showPerson: false },
  { number: 20, selected: 1, name: 'Adriana' , showPerson: false },
  { number: 21, selected: 1, name: 'Lupita' , showPerson: false },
  { number: 22, selected: 1, name: 'Laura Barra' , showPerson: false },
  { number: 23, selected: 1, name: 'Bety Rodriguez' , showPerson: false },
  { number: 24, selected: 1, name: 'Elena' , showPerson: false },
  { number: 25, selected: 1, name: 'Jona' , showPerson: false },
  { number: 26, selected: 1, name: 'Adriana' , showPerson: false },
  { number: 27, selected: 1, name: 'Fernando' , showPerson: false },
  { number: 28, selected: 1, name: 'Irma' , showPerson: false },
  { number: 29, selected: 1, name: 'Ana' , showPerson: false },
  { number: 30, selected: 1, name: 'Luis Origel' , showPerson: false },
  { number: 31, selected: 1, name: 'Brenda Reynoso' , showPerson: false },
  { number: 32, selected: 1, name: 'Adriana' , showPerson: false },
  { number: 33, selected: 1, name: 'Adua' , showPerson: false },
  { number: 34, selected: 1, name: 'Nelly' , showPerson: false },
  { number: 35, selected: 1, name: 'Maria del Carmen Plascencia de Anda' , showPerson: false },
  { number: 36, selected: 1, name: 'Miguel' , showPerson: false },
  { number: 37, selected: 1, name: 'Elena' , showPerson: false },
  { number: 38, selected: 1, name: 'Maria del Carmen Plascencia de Anda' , showPerson: false },
  { number: 39, selected: 1, name: 'Fernando' , showPerson: false },
  { number: 40, selected: 1, name: 'Brenda González' , showPerson: false },
  { number: 41, selected: 1, name: 'Iris' , showPerson: false },
  { number: 42, selected: 1, name: 'Fernando' , showPerson: false },
  { number: 43, selected: 1, name: 'Bety Rodriguez' , showPerson: false },
  { number: 44, selected: 1, name: 'Adriana' , showPerson: false },
  { number: 45, selected: 1, name: 'Cesar Morales Martinez' , showPerson: false },
  { number: 46, selected: 1, name: 'Diego' , showPerson: false },
  { number: 47, selected: 1, name: 'Bety H.' , showPerson: false },
  { number: 48, selected: 1, name: 'Claudia Herrera' , showPerson: false },
  { number: 49, selected: 1, name: 'Edith' , showPerson: false },
  { number: 50, selected: 1, name: 'Maria del Carmen Lopez Uribe' , showPerson: false },
  { number: 51, selected: 1, name: 'Diego' , showPerson: false },
  { number: 52, selected: 1, name: 'Rocio Aguilera' , showPerson: false },
  { number: 53, selected: 1, name: 'Gloria Sandoval Moreno' , showPerson: false },
  { number: 54, selected: 1, name: 'Carlos Enrique' , showPerson: false },
  { number: 55, selected: 1, name: 'Rocio Aguilera' , showPerson: false },
  { number: 56, selected: 1, name: 'Laura Barra' , showPerson: false },
  { number: 57, selected: 1, name: 'Lucia Reyes' , showPerson: false },
  { number: 58, selected: 1, name: 'Jose Carlos González' , showPerson: false },
  { number: 59, selected: 1, name: 'Carlos Enrique' , showPerson: false },
  { number: 60, selected: 1, name: 'Lucia Reyes' , showPerson: false },
  { number: 61, selected: 1, name: 'Ricardo Lopez' , showPerson: false },
  { number: 62, selected: 1, name: 'Ricardo Lopez' , showPerson: false },
  { number: 63, selected: 1, name: 'Adolfo Chavez' , showPerson: false },
  { number: 64, selected: 1, name: 'Alicia Ponce Juarez' , showPerson: false },
  { number: 65, selected: 1, name: 'Hector Medina' , showPerson: false },
  { number: 66, selected: 1, name: 'Dannia Benitez' , showPerson: false },
  { number: 67, selected: 1, name: 'Patricia Arenas' , showPerson: false },
  { number: 68, selected: 1, name: 'Feli' , showPerson: false },
  { number: 69, selected: 1, name: 'Dannia Benitez' , showPerson: false },
  { number: 70, selected: 1, name: 'Ricardo Lopez' , showPerson: false },
  { number: 71, selected: 1, name: 'Feli' , showPerson: false },
  { number: 72, selected: 1, name: 'Feli' , showPerson: false },
  { number: 73, selected: 1, name: 'Jose Carlos González' , showPerson: false },
  { number: 74, selected: 1, name: 'Montse Meraz' , showPerson: false },
  { number: 75, selected: 1, name: 'Dannia Benitez' , showPerson: false },
  { number: 76, selected: 1, name: 'Hector Medina' , showPerson: false },
  { number: 77, selected: 1, name: 'Estela Berenice Palacios Silva' , showPerson: false },
  { number: 78, selected: 1, name: 'Marijo' , showPerson: false },
  { number: 79, selected: 1, name: 'Dannia Benitez' , showPerson: false },
  { number: 80, selected: 1, name: 'Gloria Sandoval Moreno' , showPerson: false },
]);
