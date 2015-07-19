
/**
 * Temperature stores a temperature in Fahrenheit, Celsius, and Kelvin scales.
 * 
 * @author Wil Orlando
 * @version 1.0
 */
public class Temperature
{
   private double degreesFahrenheit; //Fahrenheit temperature
   private double degreesCelsius; //Celsius temperature
   private double degreesKelvin; //Kelvin temperature
   
   /**
    * This constructor for Temperature sets the Fahrenheit
    * value to the value from degrees, then calculates
    * equivalent Celsius and Kelvin valus using setDegreesFahrenheit()
    * 
    * @param degrees degrees Fahrenheit
    */
   public Temperature(double degrees)
   {
       setDegreesFahrenheit(degrees);
   }
   
   /**
    * Default constructor for Temperature sets the default
    * value of the Temperature object to 0.0 degrees
    * Fahrenheit with Celsius and Kelvin equivalents
    */
   public Temperature()
   {
       this(0.0);
   }
   
   
   /**
    * getDegreesCelsius retrieves the Celsius temperature value
    * 
    * @return a double value containing the Celsius temperature
    */
   public double getDegreesCelsius()
   {
       return degreesCelsius;
   }
   
   /**
    * getDegreesKelvin retrieves the Kelvin temperature value
    * 
    * @return a double value containing the Kelvin temperature
    */
   public double getDegreesKelvin()
   {
       return degreesKelvin;
   }
   
   /**
    * The setDegreesFahrenheit method sets the Fahrenheit temperature
    * 
    * @param degrees the fahrenheit value to store
    */
   public void setDegreesFahrenheit(double degrees)
   {
       degreesFahrenheit = degrees; //set Fahrenheit value
       degreesCelsius = (degreesFahrenheit - 32.0) * 5.0 / 9.0; // set Celsius
       degreesKelvin = degreesCelsius + 273.15; //set Kelvin
   }
}
