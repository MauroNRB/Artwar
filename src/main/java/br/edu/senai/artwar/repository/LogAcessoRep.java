package br.edu.senai.artwar.repository;

import br.edu.senai.artwar.model.LogAcesso;
import br.edu.senai.artwar.util.Conexao;
import java.util.List;

public class LogAcessoRep {

    public void salvar(LogAcesso l) {
        if(l.getId() > 0){
            Conexao.getEM().merge(l);
        } else{
            Conexao.getEM().persist(l);
        }
        efetivar();
    }
    
    public List<LogAcesso> getLogs() {
        List<LogAcesso> dataHoraAcesso = Conexao.getEM().createQuery("select l from LogAcesso l").
                getResultList();
        
        if(dataHoraAcesso.size() > 10){
            return dataHoraAcesso.subList(0, 10);
        }
        return dataHoraAcesso;
    }
       private void efetivar() {
        Conexao.getEM().getTransaction().begin();
        Conexao.getEM().getTransaction().commit();
    }
}
