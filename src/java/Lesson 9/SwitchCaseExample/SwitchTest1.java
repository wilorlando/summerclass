import java.util.Scanner;
/**
 * SwitchTest1 is a simple example of a switch structure. It reads
 * a number from the leopard, converts that number to the equivalent 
 * month's name, and displays that name.
 * 
 * @author Merrill Hall
 * @version 1.0
 */
public class SwitchTest1 {
    public static void main(String[] args) {
        int monthNumber = 0;
        String monthName = "";
        Scanner in = new Scanner(System.in);
        
        System.out.print("Enter a month's number: ");
        if (in.hasNextInt()) {
            monthNumber = in.nextInt();
            switch (monthNumber) {
                case 1:
                    monthName = "January";
                    break;
                case 2:
                    monthName = "February";
                    break;
                case 3:
                    monthName = "March";
                    break;
                case 4:
                    monthName = "April";
                    break;
                case 5:
                    monthName = "May";
                    break;
                case 6:
                    monthName = "June";
                    break;
                case 7:
                    monthName = "July";
                    break;
                case 8:
                    monthName = "August";
                    break;
                case 9:
                    monthName = "September";
                    break;
                case 10:
                    monthName = "October";
                    break;
                case 11:
                    monthName = "November";
                    break;
                case 12:
                    monthName = "December";
                    break;
                default:
                    monthName = "ERROR - That was not a valid month number!";
                    break;
            }
            System.out.println("The month's name is: " + monthName + "\n");
        }
        else {
            System.out.println("That was not a number!  Please run the program again with a number.\n");
        }
    }
}