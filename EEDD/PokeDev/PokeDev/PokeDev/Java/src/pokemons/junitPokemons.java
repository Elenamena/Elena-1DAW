package pokemons;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.Set;


class PokemonTest {
	
    private Pokemon charmander;
    private Pokemon squirtle;

    
    @BeforeEach
    void setUp() {
        Type fire = new Type("Fire");
        Type water = new Type("Water");
        Nature brave = new Nature("Brave");
        Nature calm = new Nature("Calm");

        charmander = new Pokemon("Charmander", fire, 5, 4, brave, "Male", "Charmeleon");
        squirtle = new Pokemon("Squirtle", water, 5, 7, calm, "Male", "Wartortle");
    }

    
    @Test
    void testLevelUp() {
        charmander.levelUp();
        assertEquals(6, charmander.getLevel(), "El nivel del Pokemon no aumentó correctamente :(");
    }

    
    @Test
    void testAttackEffectiveness() {
        double effectiveness = charmander.getType().calculateEffectiveness(squirtle.getType());
        assertTrue(effectiveness < 1, "El ataque de tipo fuego debería ser menos efectivo contra agua.");
    }

    
    @Test
    void testEvolve() {
        charmander.evolve();
        assertEquals("Charmeleon", charmander.getName(), "La evolución del Pokemon no se realizó correctamente :(");
    }
    
}



class TrainerTest {
    private Trainer ash;
    private Trainer millo;
    private Gym teseliaGym;
    private Medal jetBadge;

    
    @BeforeEach
    void setUp() {
        ash = new Trainer("Ash", 10, "Male");
        millo = new Trainer("Millo", 12, "Male");
        jetBadge = new Medal("Jet Badge", false);
        teseliaGym = new Gym("Teselia Gym", jetBadge);
        teseliaGym.addTrainer(millo);
    }

    
    @Test
    void testTrainerWinsMedal() {
        ash.challengeGym(teseliaGym);
        assertTrue(ash.getMedals().contains(jetBadge), "El entrenador no recibió la medalla tras vencer en el gimnasio.");
    }

    
    @Test
    void testCatchPokemon() {
        Pokemon pikachu = new Pokemon("Pikachu", new Type("Electric"), 10, 25, new Nature("Jolly"), "Male", null);
        ash.catchPokemon(pikachu);
        assertTrue(ash.getPokemonList().contains(pikachu), "El entrenador no capturó correctamente el Pokemon :(");
    }

    
    @Test
    void testBattle() {
        assertDoesNotThrow(() -> ash.battle(millo));
    }
    
}




class GymTest {
    private Gym gym;
    private Medal thunderBadge;

    
    @BeforeEach
    void setUp() {
        thunderBadge = new Medal("Thunder Badge", false);
        gym = new Gym("Vermilion Gym", thunderBadge);
    }

    
    @Test
    void testAddTrainer() {
        Trainer brock = new Trainer("Brock", 15, "Male");
        gym.addTrainer(brock);
        assertTrue(gym.getTrainers().contains(brock), "El entrenador no fue agregado al gimnasio correctamente :(");
    }

    
    @Test
    void testChallengeTrainer() {
        Trainer brock = new Trainer("Brock", 15, "Male");
        gym.addTrainer(brock);
        assertNotNull(gym.challengeTrainer(brock), "El desafío no se realizó correctamente :(");
    }
    
}


