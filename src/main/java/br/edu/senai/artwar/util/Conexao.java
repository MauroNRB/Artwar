package br.edu.senai.artwar.util;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Conexao {
    private static final EntityManagerFactory EMF = Persistence.
            createEntityManagerFactory("artwar");
    
    private static final EntityManager EM = EMF.createEntityManager();

    public static EntityManager getEM() {
        return EM;
    }
}
