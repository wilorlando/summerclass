/**
 * FirstFormatExample provides a quick example of printf() formatting.
 * 
 * @author Merrill Hall
 * @version 1.0
 */
public class FirstFormatExample {
    /**
     * The main() method displays several strings and numbers in columns
     */
    public static void main(String[] args) {
        System.out.printf("%-15s  %-15s  %13s%n","Name","Position",
                          "Hourly Wage");
        System.out.printf("%-15s  %-15s  %13s%n","---------------",
                          "---------------","-------------");
        System.out.printf("%-15s  %-15s  $%,12.2f%n","John Doe",
                          "Busboy",9.1);
        System.out.printf("%-15s  %-15s  $%,12.2f%n","Jane Doe",
                          "Cook",10.7);
        System.out.printf("%-15s  %-15s  $%,12.2f%n","Jack Doe",
                          "Architect",37.83);
        System.out.printf("%-15s  %-15s  $%,12.2f%n","Joan Doe",
                          "Electronic Engr",45.79);
        System.out.printf("%-15s  %-15s  $%,12.2f%n","Barack Obama",
                          "US President",192.31);
        System.out.printf("%-15s  %-15s  $%,12.2f%n","Tim Tebow",
                          "Quarterback",302.88);
        System.out.printf("%-15s  %-15s  $%,12.2f%n","LeBron James",
                          "B-Ball Player",9168.27);
        System.out.printf("%-15s  %-15s  $%,12.2f%n","David Beckham",
                          "Soccer Player",22115.38);
        System.out.printf("%-15s  %-15s  $%,12.2f%n","Warren Buffett",
                          "Investor",30218.76826923076923);
        System.out.printf("%-15s  %-15s  $%,12.2f%n","Bill Gates",
                          "Software Guru",1682692.30769230769231);
    }
}