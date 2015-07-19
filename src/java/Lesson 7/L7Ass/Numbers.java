import java.util.Scanner;
/**
 * Asks for a starting and ending number, then displays all numbers in between
 * 
 * @author Wil Orlando 
 * @version 7/8/15
 */
public class Numbers
{
    public static void main(String [] args)
    {
        int n1;
        int n2;
        Scanner keyInput = new Scanner(System.in);
        
        System.out.print("Enter your first number: ");
        n1 = keyInput.nextInt();
        System.out.print("Enter your second number: ");
        n2 = keyInput.nextInt();
        
        if (n1 < n2){
            while (n1 < (n2 - 1)){
                n1 = n1 + 1;
                System.out.print(n1 + " ");
            }
        }
        else if (n2 < n1){
            while (n1 > n2 + 1){
                n1 = n1 - 1;
                System.out.print(n1 + " ");
            }
        }
        else{
            System.out.print("These are the same two numbers, moron.");
        }
    }
}
