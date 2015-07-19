/**
 * EnumTest1 runs a simple program as an example of using an enum in a switch statement.
 * 
 * @author Merrill Hall
 * @version 1.0
 */
public class EnumTest1 {
    public enum DayOfWeek {
        SUNDAY,
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY;
    }
    
    public static void main(String[] args) {
        DayOfWeek day = DayOfWeek.MONDAY;
        howsYourDay(day);
        day = DayOfWeek.WEDNESDAY;
        howsYourDay(day);
        day = DayOfWeek.FRIDAY;
        howsYourDay(day);
        day = DayOfWeek.SATURDAY;
        howsYourDay(day);
        day = DayOfWeek.SUNDAY;
        howsYourDay(day);
    }

    public static void howsYourDay(DayOfWeek day) {
        switch (day) {
            case SUNDAY:
            case SATURDAY:
            System.out.println("It's " + day + "!  It's the weekend! Hooray!");
            break;
            case MONDAY:
            System.out.println("It's " + day + ". I'm sorry!");
            break;
            case FRIDAY:
            System.out.println("It's " + day + "! Only one day to go!");
            break;
            case WEDNESDAY:
            System.out.println("It's " + day + "! You're halfway there!");
            break;
            case TUESDAY:
            case THURSDAY:
            System.out.println("It's " + day + ". Nothing special about today.");
            break;
        }
        System.out.println();
    }
}