
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
       Temperature t1; //Creates a Temperature variable named t1, as well as a new Temperature object
       String temperatureType = "";
       t1 = new Temperature(temperatureType, inputTemperature);
       
       System.out.print("Enter a temperature type (C for Celsius, " +
                "F for Fahrenheit, K for Kelvin): ");
       temperatureType = keyboard.next();
       
       System.out.print("Enter a temperature: "); //line of text prompting user for a number
       inputTemperature = keyboard.nextDouble(); //Refers to our 'Scanner' object 'keyboard' and calls its method 'nextDouble()', then assigns that value to inputTemperature. The method will then look at the next group of characters to come from the keyboard and treat them as a double value.
       
       if (temperatureType.equalsIgnoreCase("F"))
       {
           System.out.println("You entered " + inputTemperature + " degrees Fahrenheit"); //displays the recently-inputted temperature to the user
           t1.setDegreesFahrenheit(inputTemperature); //calls the'setDegreesFahrenheit' method and gives it the user's value (inputTemperature) as an argument
           System.out.println("which is " + t1.getDegreesCelsius() + " degrees Celsius");
           System.out.println("and " + t1.getDegreesKelvin() + " degrees Kelvin.");
       }
       
       if (temperatureType.equalsIgnoreCase("C"))
       {
           System.out.println("You entered " + inputTemperature + " degrees Celsius"); //displays the recently-inputted temperature to the user
           t1.setDegreesCelsius(inputTemperature); //calls the'setDegreesFahrenheit' method and gives it the user's value (inputTemperature) as an argument
           System.out.println("which is " + t1.getDegreesFahrenheit() + " degrees Fahrenheit");
           System.out.println("and " + t1.getDegreesKelvin() + " degrees Kelvin.");
       }
       
       if (temperatureType.equalsIgnoreCase("K"))
       {
           System.out.println("You entered " + inputTemperature + " degrees Kelvin"); //displays the recently-inputted temperature to the user
           t1.setDegreesKelvin(inputTemperature); //calls the'setDegreesFahrenheit' method and gives it the user's value (inputTemperature) as an argument
           System.out.println("which is " + t1.getDegreesCelsius() + " degrees Celsius");
           System.out.println("and " + t1.getDegreesFahrenheit() + " degrees Fahrenheit.");
       }
   }
}
