package pokemons;


public class Medal {
	
    private String name;
    private boolean obtained;

    
    public Medal(String name, boolean obtained) {
        this.name = name;
        this.obtained = false;
    }

    
    public boolean isObtained() {
		return obtained;
	}


	public void setObtained(boolean obtained) {
		this.obtained = obtained;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getName() {
        return name;
    }
    
}


