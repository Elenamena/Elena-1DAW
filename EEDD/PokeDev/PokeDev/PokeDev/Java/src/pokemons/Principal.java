package pokemons;
import java.util.*;


public class Principal {

	public static void main(String[] args) {
		Type fire = new Type("Fire");
        Type water = new Type("Water");
        Nature brave = new Nature("Brave");
        Nature calm = new Nature("Calm");

       
        Pokemon charmander = new Pokemon("Charmander", fire, 5, 4, brave, "Male", "Charmeleon");
        Pokemon squirtle = new Pokemon("Squirtle", water, 5, 7, calm, "Male", "Wartortle");

        
        Trainer ash = new Trainer("Ash", 10, "Male");
        Trainer millo = new Trainer("Millo", 12, "Male");

        
        ash.catchPokemon(charmander);
        millo.catchPokemon(squirtle);

        
        Medal jetBadge = new Medal("Jet Badge", false);

        
        Gym teseliaGym = new Gym("Teselia Gym", jetBadge);
        teseliaGym.getNumTrainer(millo);

        
        ash.challengeGym(teseliaGym);

        
        ash.battle(millo);
    }
	
}


