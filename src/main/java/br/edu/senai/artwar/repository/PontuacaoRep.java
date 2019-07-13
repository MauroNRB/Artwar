package br.edu.senai.artwar.repository;

import br.edu.senai.artwar.model.Pontuacao;
import br.edu.senai.artwar.util.Conexao;
import java.util.List;

public class PontuacaoRep {

    public void salvar(Pontuacao p) {
        Pontuacao ultima;
        
        try {
            ultima = pontuacaoExiste(p);
            ultima.setPontos(p.getPontos());
        } catch (Exception e) {
            ultima = null;
        }

        if (ultima != null) {
            Conexao.getEM().merge(ultima);
        } else {
            Conexao.getEM().persist(ultima);
        }
        efetivar();
    }

    public List<Pontuacao> getTop10() {
        List<Pontuacao> pontos = Conexao.getEM().createQuery("select p from Pontuacao p order by p.pontos DESC").
                getResultList();

        if (pontos.size() > 10) {
            return pontos.subList(0, 10);
        }
        return pontos;
    }

    public Pontuacao pontuacaoExiste(Pontuacao p) {
        try {
            return (Pontuacao) Conexao.getEM().createQuery("select p from Pontuacao p where TRIM(UPPER(p.nomeJogador)) = :nome").
                    setParameter("nome", p.getNomeJogador().trim().toUpperCase()).getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }

    private void efetivar() {
        Conexao.getEM().getTransaction().begin();
        Conexao.getEM().getTransaction().commit();
    }
}
