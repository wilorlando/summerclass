/**
 * This class is a simple program whose use is displaying BlueJ's
 * debugger functions.
 */
public class DebuggerExample {
    /**
     * main method with variables, a loop, an if statement, and a method call
     */
    public static void main(String[] args) {
        int x = 0;
        double y = 0.0;

        x = 1;
        y = Math.PI;

        while (x < 10) {
            if (x < 5)
                System.out.println("x = " + x);
            else
                System.out.println("y = " + y);
            x = x + 1;
            y = y + 0.1;
        }

        y = myMethod(x);
        System.out.println("y = " + y);
    }

    /**
     * A method with a parameter and return value 
     */
    public static double myMethod(int z)
    {
        return z * 2.5;
    }
}