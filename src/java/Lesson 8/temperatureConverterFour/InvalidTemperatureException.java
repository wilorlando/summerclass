
/**
 * InvalidTemperatureException is an exception thrown if
 * the user tries to store a value below absolute zero.
 * 
 * @author Wil Orlando
 * @version 7/11/15
 */
public class InvalidTemperatureException extends Exception
{
    /**
    * Default constructor for InvalidTemperatureException obejcts. It
    * create an InvalidTemperatureException with a null detail message.
    */
   public InvalidTemperatureException() {
       super();
    }
    
   /**
    * Constructor for InvalidTemperatureException objects.
    * It creates an InvalidTemperatureException object with the specified detail message.
    */
   public InvalidTemperatureException(String message) {
       super(message);
    }
}
