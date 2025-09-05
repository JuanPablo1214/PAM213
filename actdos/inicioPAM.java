package actdos;

import java.util.Scanner;

class Reglamento{
        public void ReglamentoPoo(){
            System.out.println("Hola");
        }

         public void LineamientoClassroom(){
            System.out.println("Hola");
        }

         public void FechasParciales(){
            System.out.println("Hola");
        }

         public void PorcentajesParcial(){
            System.out.println("Hola");
        }

}

public class inicioPAM {

    

    public static void main(String[] args) {
       

        Reglamento reg = new Reglamento();
        Reglamento lin = new Reglamento();

        try (Scanner sc = new Scanner(System.in)) {
            int opcion;
            do {
                System.out.println("--- Opciones ---");
                System.out.println("1. Reglamento POO");
                System.out.println("2. Lineamientos Classroom");
                System.out.println("3. Fechas de Parciales");
                System.out.println("4. Porcentajes por Parcial");
                System.out.println("5. Salir");
                System.out.print("Seleccione una opción: ");
                opcion = sc.nextInt();

                if (opcion >= 1 && opcion <= 4) {
                  
                    switch (opcion) {
                        case 1:
                            System.out.println(reg);
                            break;
                        case 2:
                          
                            break;
                        case 3:
                          
                            break;
                        case 4:
                            
                            break;
                    }
                } else if (opcion != 5) {
                    System.out.println("Opción no válida.");
                }
                System.out.println();
            } while (opcion != 5);
        }
       
        
    }
}
