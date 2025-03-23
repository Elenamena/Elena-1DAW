package pokemons;

import java.util.ArrayList;
import java.util.List;


public class Region {
	
    private String name;
    private int numPokemon;
    private List<Gym> gyms;

    
    public Region(String name, int numPokemon, List gyms) {
        this.name = name;
        this.numPokemon = numPokemon;
        this.gyms = new ArrayList<>();
    }

    
    public String getName() {
        return name;
    }

    
    public int getNumPokemon() {
        return numPokemon;
    }

    
    public void addGym(Gym gym) {
        gyms.add(gym);
    }

    
    public int getNumGyms() {
        return gyms.size();
    }
}


