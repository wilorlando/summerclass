
import java.util.Scanner; //Tells Java where to find the 'Scanner' class
/**
 * TemperatureDriver runs and tests the Temperature class
 * 
 * @author Wil Orlando
 * @version 1.0
 */
public class TextWriterDriver
{
    /**
    * main() reads two Fahrenheit temperature and
    * displays their Celsius and Kelvin equivalents
    */
   public static void main(String[] args)
   {
       //local variables
       double inputTemperature = 0.0; //memory location to hold the input from keyboard until we store it in a Temperature object
       Scanner keyboard = new Scanner(System.in); //Creates a 'Scanner' object named 'keyboard', whose purpose is to get data from the keyboard. The 'Scanner.in' argument tells the constructor which input stream to read data from (In this case, the default input stream: The keyboard)
       Temperature t1 = new Temperature(); //Creates a Temperature variable named t1, as well as a new Temperature object
       Temperature t2; //Creates another Temperature variable named t2; At this point in time, it is a null reference (doesn't have an object to refer to)
       
       System.out.print("Enter a Fahrenheit temperature: "); //line of text prompting user for a number
       inputTemperature = keyboard.nextDouble(); //Refers to our 'Scanner' object 'keyboard' and calls its method 'nextDouble()', then assigns that value to inputTemperature. The method will then look at the next group of characters to come from the keyboard and treat them as a double value.
       System.out.println("You entered " + inputTemperature + " degrees Fahrenheit"); //displays the recently-inputted temperature to the user
       t1.setDegreesFahrenheit(inputTemperature); //calls the'setDegreesFahrenheit' method and gives it the user's value (inputTemperature) as an argument
       System.out.println("which is " + t1.getDegreesCelsius() + " degrees Celsius");
       System.out.println("and " + t1.getDegreesKelvin() + " degrees Kelvin.");
       System.out.print("Enter another Fahrenheit temperature: ");
       inputTemperature = keyboard.nextDouble();
       System.out.println("You entered " + inputTemperature + " degrees Fahrenheit");
       t2 = new Temperature(inputTemperature);
       System.out.println("which is " + t2.getDegreesCelsius() + " degrees Celsius");
       System.out.println("and " + t2.getDegreesKelvin() + " degrees Kelvin.");
   }
}
