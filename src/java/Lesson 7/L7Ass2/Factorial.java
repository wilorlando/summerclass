import java.util.Scanner;
/**
 * Factorial asks for a positive integer and calculates its factorial value.
 * The factorial value of n is 1*2*3*...*n.
 * 
 * @author Wil Orlando
 * @version 7/8/15
 */
public class Factorial
{
    public static void main(String[] args)
    {
        int orgNum = 0; //original number
        int num; //placeholder number used to calculate factorial
        int multiplier = 1; //multiplier used to calculate factorial
        Scanner keyInput = new Scanner(System.in);
        
        System.out.print("\nEnter a positive integer: ");
        orgNum = keyInput.nextInt();
        num = orgNum;
        
        System.out.print("The factorial of " + orgNum + " is ");
        while (multiplier < orgNum){
            num = num * multiplier;
            multiplier = multiplier + 1;
        }
        
        System.out.print(num);
    }
}
