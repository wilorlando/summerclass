import java.util.Scanner;
/**
 * Fibonacci asks for a number, then calculates that many terms in the Fibonacci sequence
 * Fibonacci numbers start with 1 and 0, then each one is the sum of the two before it
 * The first few terms in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34
 * 
 * @author Wil Orlando
 * @version 7/9/15
 */
public class Fibonacci
{
    public static void main(String [] args){
        int n1 = 0;
        int n2 = 1;
        int n3 = 0;
        int numOfTerms; //number of terms requested by user
        int count = 3; //number of times while loop has run
        Scanner keyboard = new Scanner(System.in);
        
        System.out.print("\nHow many terms of the Fibonacci sequence would you like to display? ");
        numOfTerms = keyboard.nextInt();
        
        System.out.print("Term " + numOfTerms + " of the Fibonacci sequence is ");
        
        if (numOfTerms == 0){
            System.out.print("\n...Wait, the 0th term? Come on now.");
        }
        else if (numOfTerms == 1){
            System.out.print("0");
        }
        else if (numOfTerms == 2){
            System.out.print("1");
        }
        else if (numOfTerms > 2){
            
            while (count <= numOfTerms){
                n3 = n1 + n2;
                n1 = n2;
                n2 = n3;
                count = count + 1;
            }
        
            System.out.print(n3);
        }
        else{
            System.out.print("\n...Wait, that isn't a valid term. Get it together.");
        }
    }
}
