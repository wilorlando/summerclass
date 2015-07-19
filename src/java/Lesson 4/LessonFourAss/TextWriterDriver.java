
/**
 * Driver class to try out TextWriter
 * 
 * @author Wil Orlando 
 * @version 1.0
 */
public class TextWriterDriver
{
    public static void main(String[] args)
    {
        TextWriter tw1;
        
        tw1 = new TextWriter();
        
        tw1.setTextToDisplay("Screw Java");
        
        tw1.displayText();
        
        TextWriter tw2 = new TextWriter("And this line is from my second object.");
        
        System.out.println(tw2.getTextToDisplay());
        
        
        TextWriter tw3 = new TextWriter("This is a third line of text!");
        
        System.out.println(tw3.getTextToDisplay());
        
        tw3.clearTextToDisplay();
        
        tw3.displayText();
    }
}
