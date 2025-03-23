package pokemons;


public class Professor extends Person {
	
    public Professor(String name, int age, String gender) {
        super(name, age, gender);
    }
    

    public void giveStarter(Trainer trainer, Pokemon pokemon) {
        trainer.catchPokemon(pokemon);
        System.out.println(name + " le dió un pokemon a " + trainer.name + ".");
    }

    
    @Override
    public String roleDescription() {
        return name + " es un profesor de pokemons.";
    }
    
}


