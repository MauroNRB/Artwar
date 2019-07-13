package br.edu.senai.artwar.repository;

import br.edu.senai.artwar.model.Jogador;
import br.edu.senai.artwar.util.Conexao;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

public class JogadorRep {

    public void salvar(Jogador j) {
        j = validacao(j);
        String senha = criptografar(j.getSenha());
        j.setSenha(senha);

        if (j.getId() > 0) {
            Conexao.getEM().merge(j);
        } else {
            Conexao.getEM().persist(j);
        }
        efetivar();
    }

    public Jogador validacao(Jogador j) {

        if (j.getNome().length() > 50) {
            j.setNome(j.getNome().substring(0, 49));
        }
        if (j.getEmail().length() > 50) {
            j.setEmail(j.getEmail().substring(0, 49));
        }
        if (j.getSenha().length() > 10) {
            j.setSenha(j.getSenha().substring(0, 9));
        }
        if (j.getLogin().length() > 20) {
            j.setLogin(j.getLogin().substring(0, 19));
        }
        j.setNome(j.getNome().replace("script", ""));
        j.setEmail(j.getEmail().replace("script", ""));
        j.setLogin(j.getLogin().replace("script", ""));

        return j;
    }

    //método para excluir um jogador
    public void excluir(Jogador j) {
        Conexao.getEM().remove(Conexao.getEM().merge(j));
        efetivar();
    }

    //método para listar os jogadores cadastrados
    public List<Jogador> getJogadores() {
        return Conexao.getEM().createQuery("select j from Jogador j").
                getResultList();
    }

    //método para encontrar um jogador pelo id informado
    public Jogador buscarPorId(int id) {
        return Conexao.getEM().find(Jogador.class, id);
    }

    //método para encontrar um jogador pelo nome
    public Jogador buscarPorNome(String nome) {
        try {
            return (Jogador) Conexao.getEM().createQuery("select j from Jogador j where TRIM(UPPER(j.nome)) = :nome").
                    setParameter("nome", nome.trim().toUpperCase()).getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }

    private void efetivar() {
        Conexao.getEM().getTransaction().begin();
        Conexao.getEM().getTransaction().commit();
    }

    private String criptografar(String senha) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(senha.getBytes(), 0, senha.length());
            return new BigInteger(1, md.digest()).toString(16);
        } catch (NoSuchAlgorithmException ex) {
            System.out.println("Deu erro para gerar senha md5 " + ex.getMessage());
        }
        return null;
    }
    //método para logar um jogador
    public static Jogador logar(String login, String senha) {
        try {
            return (Jogador) Conexao.getEM().createQuery("select j from Jogador j where j.login = :username and j.senha = FUNC('MD5', :password)").
                    setParameter("username", login).
                    setParameter("password", senha).getSingleResult();
        } catch (Exception e) {
            System.out.println("Login inválido!");
            return null;
        }
    }
    //método para encontrar um jogador pelo email
    public Jogador buscarPorEmail(String email) {        
        try {
            return (Jogador) Conexao.getEM().createQuery("select j from Jogador j where TRIM(UPPER(j.email)) = :email").
                setParameter("email", email.trim().toUpperCase()).getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }
}
