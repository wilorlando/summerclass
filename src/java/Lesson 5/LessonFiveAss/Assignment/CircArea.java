import java.util.Scanner;
/**
 * Asks for a radius and calculates a circle's area
 * 
 * @author Wil Orlando
 * @version 1.0
 */
public class CircArea
{
    public static void main(String[] args)
    {
        double pi = 3.141592653589793;
        double inputRadius;
        double area;
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter a radius: ");
        inputRadius = keyboard.nextDouble();
        
        area = pi * (inputRadius * inputRadius);
        
        System.out.println("The area of this circle is: " + area);
    }
}
