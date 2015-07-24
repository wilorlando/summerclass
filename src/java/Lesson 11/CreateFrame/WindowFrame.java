import java.awt.Dimension;
import java.awt.Insets;
import javax.swing.JFrame;
import javax.swing.SwingUtilities;

public class WindowFrame extends JFrame {

    public WindowFrame() {
        setTitle("Window Frame");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 300);
        setLocationRelativeTo(null); // centers window in display screen
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
                public void run() {
                    WindowFrame dw = new WindowFrame();
                    dw.setVisible(true);
                    Dimension dim = dw.getSize();
                    Insets ins = dw.getInsets();
                    System.out.println("Window Size is " + dim.width + " by " + dim.height);
                    System.out.println("Window top inset is " + ins.top);
                    System.out.println("Window bottom inset is " + ins.bottom);
                    System.out.println("Window left inset is " + ins.left);
                    System.out.println("Window right inset is " + ins.right);
                }
            });
    }
}