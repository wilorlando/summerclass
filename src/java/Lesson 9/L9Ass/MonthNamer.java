import java.util.Scanner;
/**
 * Build an enumeration for the 12 months of the year.
 * Then, ask user for a numeric month (1-12)
 * Use a switch statement to set an enumeration variable to the correct value for that month
 * Then, use the enumeration variable to display the proper name for the month.
 * In other words: If the user enters 3, the program will display "The month is March."
 */
public class MonthNamer {
    public enum Months {
        JANUARY,
        FEBRUARY,
        MARCH,
        APRIL,
        MAY,
        JUNE,
        JULY,
        AUGUST,
        SEPTEMBER,
        OCTOBER,
        NOVEMBER,
        DECEMBER;
    }
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        int input_num = 0;
        String result = "";
        
        System.out.print("Enter a number corresponding to a month (Between 1 and 12): ");
        input_num = keyboard.nextInt();
        
        switch (input_num) {
            case 1:
                result = Months.JANUARY.toString();
                break;
            case 2:
                result = Months.FEBRUARY.toString();
                break;
            case 3:
                result = Months.MARCH.toString();
                break;
            case 4:
                result = Months.APRIL.toString();
                break;
            case 5:
                result = Months.MAY.toString();
                break;
            case 6:
                result = Months.JUNE.toString();
                break;
            case 7:
                result = Months.JULY.toString();
                break;
            case 8:
                result = Months.AUGUST.toString();
                break;
            case 9:
                result = Months.SEPTEMBER.toString();
                break;
            case 10:
                result = Months.OCTOBER.toString();
                break;
            case 11:
                result = Months.NOVEMBER.toString();
                break;
            case 12:
                result = Months.DECEMBER.toString();
                break;
            default:
                result = "not valid. Sorry!";
                break;
        }
        
        System.out.println("The month is " + result + ".");
    }
}