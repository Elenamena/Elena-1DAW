package pokemons;
import java.util.ArrayList;
import java.util.List;


class Trainer extends Person {
    private List<Pokemon> pokemonList;
    private List<Medal> medals;

    
    public Trainer(String name, int age, String gender) {
        super(name, age, gender);
        this.pokemonList = new ArrayList<>();
        this.medals = new ArrayList<>();
    }

    
    public void challengeGym(Gym gym) {
        System.out.println(name + " desafía el gimnasio " + gym.getName() + ".");
        
        if (gym.challengeTrainer(this)) {
            Medal earnedMedal = gym.getMedal();
            medals.add(earnedMedal);
            System.out.println(name + " ganó la medalla " + earnedMedal.getName() + "!");
        } else {
            System.out.println(name + " perdió el combate :(");
        }
    }

    
    public void catchPokemon(Pokemon pokemon) {
        pokemonList.add(pokemon);
        System.out.println(name + " capturó a " + pokemon.getName() + "!");
    }

    
    @Override
    public String roleDescription() {
        return name + " es un entrenador de pokemons.";
    }
    
}


