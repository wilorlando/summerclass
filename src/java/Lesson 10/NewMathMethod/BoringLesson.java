import java.lang.Math;
/**
 * Quick program to use a Math method I haven't used before (cbrt)
 * Should use printf() to format the output
 * Will calculate the cube root of the first 25 even numbers greater than zero, and
 * display all of them with five decimal places.
 */
public class BoringLesson {
    public static void main(String[] args) {
        int count = 2;
        double needSleep;
        
        while (count <= 50) {
           needSleep = Math.cbrt(count);
           System.out.printf("%3.5f%n", needSleep);
           count = count + 2;
        }
    }
}
