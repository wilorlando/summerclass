import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Insets;
import javax.swing.JPanel;

public class ArtStuff extends JPanel{
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        Dimension size = getSize();
        Insets insets = getInsets();
        int w = size.width - insets.left - insets.right;
        int h = size.height - insets.top - insets.bottom;
        
        g2d.setColor(Color.white);
        g2d.fillRect(0,0,w,h);
        
        g2d.setColor(Color.red);
        g2d.drawLine (2, 5, 79, h-10);
        
        g2d.setColor(Color.green);
        g2d.fillRect(65, 100, 200, 44);
        
        g2d.setColor(Color.yellow);
        g2d.fillOval(234, 546, 123,435);
    }
}