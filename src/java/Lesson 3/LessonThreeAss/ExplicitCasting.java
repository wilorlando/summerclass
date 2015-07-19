
/**
 * We talked about casting in Chapter 4.
 * For this lesson's assignment, try writing programs involving different primitive types.
 * See which give you errors and which work without explicit casting.
 * Some won't work even with explicit casting—see if you can find which those are.
 */
public class ExplicitCasting
{
    public static void main(String [] args)
    {
        int daInt = 4;
        String daString = "Stringety";
        double daDouble = 3.3333;
        boolean daBool = true;
        byte daByte = 1;
        long daLong = 72935822;
        char daChar = 'a';
        short daShort = 150;
        
        daShort = daByte;
        daInt = daShort;
        daLong = daInt;
        daDouble = daLong;
        
        System.out.print(daDouble);
    }
}
