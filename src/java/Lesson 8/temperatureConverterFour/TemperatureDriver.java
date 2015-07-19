import java.util.Scanner;
/**
 * TemperatureDriver runs and tests the Temperature class.
 * 
 * @author Wil Orlando
 * @version 1.0
 */
public class TemperatureDriver {
    /**
     * main() reads a temperature type and value, then 
     * converts it to the other two temperature scales.
     */
    public static void main(String[] args) {
        double inputTemperature = 0.0;
        Scanner keyInput = new Scanner(System.in); 
        Temperature t1;
        String temperatureType = "";
        boolean moreTemperatures = true; // another temperature?
        boolean goodType = false; // good temperature type?
        boolean goodTemperature = false; // good temperature value?

        while (moreTemperatures) {
            System.out.print("Enter a temperature type (C=Celsius, " +
                "F=Fahrenheit, K=Kelvin, Q=Quit): ");
            temperatureType = keyInput.next();
            goodType = false;
            while ( ! goodType) {
                if (temperatureType.equalsIgnoreCase("Q") ||
                    Temperature.isTypeValid(temperatureType)) {
                    goodType = true;
                }
                else {
                    System.out.println("Invalid temperature type!");
                    System.out.println("The type must be C, F, K, or Q.");
                    System.out.print("Please enter the temperature type again: ");
                    temperatureType = keyInput.next();
                }
            }
            if (temperatureType.equalsIgnoreCase("Q")) { // quit
                moreTemperatures = false;
                System.out.println("\nProgram ended.");
            }
            else {
                goodTemperature = false;
                do {
                    System.out.print("Enter a temperature: ");
                    if (keyInput.hasNextDouble()) {
                        inputTemperature = keyInput.nextDouble();
                        if (Temperature.isTemperatureValid(temperatureType, inputTemperature)) {
                            goodTemperature = true;
                        } else {
                            System.out.println("You entered an invalid temperature!");
                            System.out.println("It must be greater than absolute zero.");
                            System.out.println("Try again.");
                        }
                    }
                    else {
                        System.out.println("You entered an invalid temperature!");
                        System.out.println("It must be a numeric value.");
                        System.out.println("Try again.");
                        keyInput.next();
                    }
                } while ( ! goodTemperature);
                
                try {
                    t1 = new Temperature(temperatureType, inputTemperature);
    
                    if (temperatureType.equalsIgnoreCase("F")) {
                        System.out.println("You entered " + inputTemperature + 
                            " degrees Fahrenheit");
                        System.out.println("which is " + t1.getDegreesCelsius() + 
                            " degrees Celsius"); 
                        System.out.println("and " + t1.getDegreesKelvin() + 
                            " degrees Kelvin.");
                    }
                    else if (temperatureType.equalsIgnoreCase("C")) {
                        System.out.println("You entered " + inputTemperature + 
                            " degrees Celsius");
                        System.out.println("which is " + t1.getDegreesFahrenheit() + 
                            " degrees Fahrenheit"); 
                        System.out.println("and " + t1.getDegreesKelvin() + 
                            " degrees Kelvin.");
                    }
                    else if (temperatureType.equalsIgnoreCase("K")) {
                        System.out.println("You entered " + inputTemperature + 
                            " degrees Kelvin");
                        System.out.println("which is " + t1.getDegreesCelsius() + 
                            " degrees Celsius"); 
                        System.out.println("and " + t1.getDegreesFahrenheit() + 
                            " degrees Fahrenheit.");
                    }
                }
                catch (InvalidTemperatureTypeException e) {
                    System.err.println(e);
                    System.exit(1);
                }
                catch (InvalidTemperatureException e) {
                    System.err.println(e);
                    System.exit(1);
                }
            }
        }
    }
}