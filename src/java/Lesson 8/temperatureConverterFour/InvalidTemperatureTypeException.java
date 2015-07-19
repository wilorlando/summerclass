
/**
 * InvalidTemperatureTypeException is an exception that gets thrown if
 * a user tried to create a Temperature object using an invalid temperature type
 * 
 * @author Wil Orlando
 * @version 7/11/15
 */
public class InvalidTemperatureTypeException extends Exception //The 'extends' keyword tells Java we want this class to be a 'subclass' or 'child' of another class (which is, in this case, the class Exception). We cna also say that Exception is the 'superclass' or 'parent' of this one. Our class will 'inherit' or have all the attributes and methods that Exception has
{
   /**
    * Default constructo for InvalidTemperatureTypeException obejcts. It
    * create an InvalidTemperatureTypeException with a null detail message.
    */
   public InvalidTemperatureTypeException() {
       super();
    }
    
   /**
    * Constructor for InvalidTemperatureTypeException objects.
    * It creates an InvalidTemperatureTypeException object with the specified detail message.
    */
   public InvalidTemperatureTypeException(String message) {
       super(message);
    }
}
