
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
   * This constructor for Temperature sets the temperature
   * values to the value in degrees, based on type
   * 
   * @param type temperature scale to use
   * @param degrees degrees Fahrenheit
   */
   public Temperature(String type, double degrees)
   {
       if (type.equalsIgnoreCase("C"))
       {
            setDegreesCelsius(degrees);
       }
       else if (type.equalsIgnoreCase("F"))
       {
            setDegreesFahrenheit(degrees);
       }
       else if (type.equalsIgnoreCase("K"))
       {
            setDegreesKelvin(degrees);
       }
   }
   
   public double getDegreesFahrenheit()
   {
       return degreesFahrenheit;
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
   
   public void setDegreesCelsius(double degrees)
   {
       degreesCelsius = degrees;
       degreesFahrenheit = degreesCelsius * 9.0 / 5.0 + 32.0;
       degreesKelvin = degreesCelsius + 273.15;
   }
   
   public void setDegreesKelvin(double degrees)
   {
       degreesKelvin = degrees;
       degreesCelsius = degreesKelvin - 273.15;
       degreesFahrenheit = degreesCelsius * 9.0 / 5.0 + 32.0;
   }
}
