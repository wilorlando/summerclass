import java.util.Scanner;
/**
 * Use Scanner's hasNext methods to identify as many types of data input from the keyboard as possible.
 * Write a program that will identify bytes, shorts, ints, longs, floats, and booleans.
 * If your input isn't a type you can identify before reading it, read it as a string.
 * Once you've identified and read it, use printf() to display the type and the value.
 * Format the output so that the types are left-justified in one column and the values are in another
 *   column, with number right-justified and Strings and booleans left-justified.
 *   
 * Author's note: I'm tired. This was a really long, dull lesson.
 *   
 * @author Wil Orlando
 * @version 1.0
 */
public class IdentifyDataInput
{
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        
        System.out.println("This program will identify data input and stuff.");
        System.out.println("When you're done entering values or whatever, enter 'q'.");
        
        while (true) {
            System.out.print("\nEnter a thing: ");
            if (keyboard.hasNextBoolean()) {
                System.out.printf("%-15s %-15s %n", "Boolean", keyboard.next());
            }
            else if (keyboard.hasNextByte()) {
                System.out.printf("%-15s %-15s %n", "Byte", keyboard.next());
            }
            else if (keyboard.hasNextShort()) {
                System.out.printf("%-15s %-15s %n", "Short", keyboard.next());
            }
            else if (keyboard.hasNextInt()) {
                System.out.printf("%-15s %-15s %n", "Int", keyboard.next());
            }
            else if (keyboard.hasNextLong()) {
                System.out.printf("%-15s %-15s %n", "Long", keyboard.next());
            }
            else if (keyboard.hasNextFloat()) {
                System.out.printf("%-15s %-15s %n", "Float", keyboard.next());
            }
            else if (keyboard.hasNext("q")) {
                break;
            }
            else {
                System.out.printf("%-15s %-15s %n", "String", keyboard.next());
            }
        }
        
        System.out.print("\nGOODBYE\n");
    }
}
