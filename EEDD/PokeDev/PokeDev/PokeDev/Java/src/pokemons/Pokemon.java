package pokemons;
import java.util.*;

public class Pokemon {
	
    private String name;
    private Type type;
    private int level;
    private int numPokedex;
    private Nature nature;
    private String gender;
    private String evolution;

    
    public Pokemon(String name, Type type, int level, int numPokedex, Nature nature, String gender, String evolution) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.numPokedex = numPokedex;
        this.nature = nature;
        this.gender = gender;
        this.evolution = evolution;
    }

    
    public String getName() { return name; }

    
    public void levelUp() {
        level = level + 1;
        System.out.println(name + " ascendió al nivel " + level + "!");
    }

    
    public void evolve() {
        if (evolution != null) {
            System.out.println(name + " evolucionó a " + evolution + "!");
            name = evolution;
            evolution = null;
        } else {
            System.out.println(name + " no puede evolucionar :(");
        }
    }
    
}


