import java.util.Scanner;
/**
 * Asks for two numbers from the user and displays the larger.
 * 
 * @author Wil Orlando 
 * @version 7/4/15
 */


public class DisplayBigNumber
{
    public static void main(String [] args)
    {
        Scanner input = new Scanner(System.in);
        
        double n1;
        double n2;
        
        System.out.print("Enter the first number: ");
        n1 = input.nextDouble();
        
        System.out.print("Enter another number: ");
        n2 = input.nextDouble();
        
        System.out.print("The bigger number is... ");
        if (n1 > n2)
        {
            System.out.print(n1);
        }
        else if (n2 > n1)
        {
            System.out.print(n2);
        }
        else
        {
            System.out.print("Neither! These numbers are equal.");
        }
        
    }
}
