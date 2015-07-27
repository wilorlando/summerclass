import javax.swing.*;
/**
 * BouncingBallsWindow is the top level of three that produce a window with
 * ten animated bouncing balls in it.
 * 
 * @author Merrill Hall 
 * @version 1
 */
public class BouncingBallsWindow extends JFrame {
    public BouncingBallsWindow() {  // Create window
        setTitle("Ten Bouncing Balls");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        add(new BouncingBalls());  // Add bouncing ball panel

        pack();  // Set the window size
        setLocationRelativeTo(null);  // Center the window in the display
    }

    public static void main(String[] args) {
        // Run GUI in the Event Dispatcher Thread (EDT)
        SwingUtilities.invokeLater(new Runnable() {
                public void run() {
                    // Set up main window (using Swing's Jframe)
                    BouncingBallsWindow bbw = new BouncingBallsWindow();
                    bbw.setVisible(true);
                }
            });
    }
}