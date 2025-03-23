package pokemons;


public class Item {
	
    private String name;

    
    public Item(String name) {
        this.name = name;
    }

    
    public void give(Pokemon pokemon) {
        System.out.println(name + " fue dado a " + pokemon.getName() + ".");
    }

    
    public void use(Pokemon pokemon) {
        System.out.println(name + " fue usado en " + pokemon.getName() + ".");
    }
    
}


