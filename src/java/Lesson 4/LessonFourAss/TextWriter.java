
/**
 * Stores and displays any text given to it
 * 
 * @author Wil Orlando 
 * @version 1.0
 */
public class TextWriter
{
    private String textToDisplay; //the text to be displayed
    
    public TextWriter() //constructor
    {
        textToDisplay = "";
    }

    public TextWriter(String inputText) //constructor
    {
        textToDisplay = inputText;
    }

    public void setTextToDisplay(String inputText) //stores text
    {
        textToDisplay = inputText;
    }
    
    public String getTextToDisplay() //gives caller a copy of the stored string
    {
        return textToDisplay;
    }
    
    public void displayText() //displays text
    {
        System.out.println(textToDisplay);
    }
    
    
    public void clearTextToDisplay()
    {
        textToDisplay = "";
    }
}
