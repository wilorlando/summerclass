import java.util.Scanner;
/**
 * This program will convert the numbers 1 through 7 to the appropriate day of the week
 */
public class NumberWeek {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        int input_num = 8;
        String weekday = "";
        
        System.out.print("\nEnter a number between 1 and 7: ");
        input_num = keyboard.nextInt();
        
        switch (input_num) {
            case 1:
                weekday = "Monday";
                break;
            case 2:
                weekday = "Tuesday";
                break;
            case 3:
                weekday = "Wednesday";
                break;
            case 4:
                weekday = "Thursday";
                break;
            case 5:
                weekday = "Friday";
                break;
            case 6:
                weekday = "Saturday";
                break;
            case 7:
                weekday = "Sunday";
                break;
            default:
                weekday = "That isn't a valid day of the week, moron.";
                break;
        }
        
        System.out.println("Day of the Week: ");
        System.out.println("\n" + weekday);
    }
}