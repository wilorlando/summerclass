/**
 * Enumeration class Planet - lists the planets of the solar system and 
 * their weight multiples relative to Earth.
 * 
 * @author Merrill Hall
 * @version 1.0
 */
public enum Planet {
    MERCURY (0.378),
    VENUS   (0.907),
    EARTH   (1.0),
    MARS    (0.377),
    JUPITER (2.364),
    SATURN  (0.916),
    URANUS  (0.889),
    NEPTUNE (1.125),
    PLUTO   (0.067);

    private double relativeWeight;   // multiple to obtain weight

    private Planet(double relativeWeight) {
        this.relativeWeight = relativeWeight;
    }

    private double getRelativeWeight() { 
        return relativeWeight;
    }

    public double getWeight(double weight) {
        return weight * relativeWeight;
    }
}