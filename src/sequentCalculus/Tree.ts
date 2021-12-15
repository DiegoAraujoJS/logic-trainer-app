// instrucción 0: escribir G => D como la raíz de la prueba
// instrucción n+1: Si no quedan fórmulas para reducir en ninguna hoja,
// entonces detener el proceso. Si todas las hojas están cerradas, 
// entonces escribí arriba de cada secuente G => D el secuente p => p
// con cualquier p que esté repetido a la izquierda y derecha del 
// secuente.
// Si hay hojas abiertas...
//                                 :                :
//         :                G => phi, D         G => psi, D
// G => phi & psi, D  -->   ------------------------------
//                              G => phi & psi, D
//                                        :

