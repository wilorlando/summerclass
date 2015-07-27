import java.awt.*;
import java.util.Formatter;
import javax.swing.*;
/**
 * BouncingBalls
 * 
 */
public class BouncingBalls extends JPanel {
    private final Dimension SIZE = new Dimension(600,450); // Panel size
    private final int UPDATE_RATE = 30; // Number of refreshes per second
    private Ball[] balls; // An array of 10 balls
    private Thread ballThread; // Animation thread
    
    /** 
     * Constructor sets up the panel and starts its animation thread 
     */
    public BouncingBalls() {
        int index = 0;
        setPreferredSize(SIZE);
        balls = new Ball[10];
        while (index < balls.length) {
            balls[index] = new Ball(SIZE);
            index++;
        }
        // Start the balls bouncing (in their own thread)
        ballThread = new Thread() {
                public void run() {
                    while (true) { // Execute one update step
                        // Calculate the balls' new positions
                        int index = 0;
                        while (index < balls.length) {
                            balls[index].move();
                            index++;
                        }
                        // Refresh the display
                        repaint(); // Callback paintComponent()
                        // Delay so the animation's not too fast
                        try {
                            Thread.sleep(1000/UPDATE_RATE);  // milliseconds
                        } catch (InterruptedException ex) { }
                    }
                }
            };
        ballThread.start();  // Callback run()
    }

    /** 
     * Override the JPanel paintComponent method with our drawing of 10 balls 
     */
    public void paintComponent(Graphics g) {
        super.paintComponent(g);    // Paint background
        Graphics2D g2d= (Graphics2D) g;
        // Draw the box
        g2d.setColor(Color.BLACK);
        g2d.fillRect(0, 0, getWidth(), getHeight());

        // Draw the balls
        int index = 0;
        while (index < balls.length) {
            balls[index].paint(g2d);
            index++;
        }
    }
}