package pokemons;

public class Gym {
	
    private String name;
    private Medal medal;
    private int numTrainer;

    
    public Gym(String name, Medal medal, int numTrainer) {
        this.name = name;
        this.medal = medal;
        this.numTrainer = numTrainer;
    }

    
    public String getName() {
        return name;
    }

    
    public Medal getMedal() {
        return medal;
    }
    
    
    public int getNumTrainer() {
    	return numTrainer;
    }

    
    public boolean challengeTrainer(Trainer trainer) {
        return Math.random() > 0.5; 
    }
    
}


