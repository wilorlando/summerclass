import java.util.Scanner;
/**
 * Finds the perimeter and area of a rectangle based on a given height and width.
 * 
 * @author Wil Orlando
 * @version 1.0
 */
public class RectangleStats
{
    public static void main(String[] args)
    {
        double width;
        double height;
        double area;
        double perimeter;
        Scanner keyboard = new Scanner(System.in);
        
        System.out.print("Enter height: ");
        height = keyboard.nextDouble();
        
        System.out.print("Enter width: ");
        width = keyboard.nextDouble();
        
        area = height * width;
        System.out.println("Your area is: " + area);
        
        perimeter = 2 * (height + width);
        System.out.println("You perimeter is: " + perimeter);
    }
}
