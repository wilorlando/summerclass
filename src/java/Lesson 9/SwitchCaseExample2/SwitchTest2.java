import java.util.Scanner;
/**
 * SwitchTest2 is an example of a switch structure using strings. It reads
 * a day of the week from the leopard and then displays a message based on the day.
 * 
 * @author Merrill Hall
 * @version 1.0
 */
public class SwitchTest2 {
    public static void main(String[] args) {
        String day = "";
        Scanner in = new Scanner(System.in);

        System.out.print("Enter a day of the week: ");
        day = in.next().toUpperCase();
        switch (day) {
            case "SUNDAY":
            case "SATURDAY":
                System.out.println("It's the weekend! Hooray!");
                break;
            case "MONDAY":
                System.out.println("It's Monday! I'm sorry!");
                break;
            case "FRIDAY":
                System.out.println("Only one day to go!");
                break;
            case "WEDNESDAY":
                System.out.println("You're halfway there!");
                break;
            case "TUESDAY":
            case "THURSDAY":
                System.out.println("Nothing special about today.");
                break;
            default:
                System.out.println("Sorry - that wasn't a valid day of the week.");
                break;
        }
        System.out.println();
    }
}