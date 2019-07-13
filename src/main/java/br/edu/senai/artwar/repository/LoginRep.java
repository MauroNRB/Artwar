package br.edu.senai.artwar.repository;

import br.edu.senai.artwar.model.LogAcesso;
import br.edu.senai.artwar.util.Conexao;

public class LoginRep {

    public void salvar(LogAcesso l) {
        if (l.getId() > 0) {
            Conexao.getEM().merge(l);
        } else {
            Conexao.getEM().persist(l);
        }
        efetivar();
    }
    
    private void efetivar() {
        Conexao.getEM().getTransaction().begin();
        Conexao.getEM().getTransaction().commit();
    }
}