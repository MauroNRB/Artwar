package br.edu.senai.artwar.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LogAcesso implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String nomeJogador;
    @Column
    private String login;
    @Column
    private String dataHoraAcesso;

    public LogAcesso() {
    }

    public LogAcesso(String nomeJogador, String login, String dataHoraAcesso) {
        this.nomeJogador = nomeJogador;
        this.login = login;
        this.dataHoraAcesso = dataHoraAcesso;
    }

    //fazer os métodos get, set e equals hashcode

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomeJogador() {
        return nomeJogador;
    }

    public void setNomeJogador(String nomeJogador) {
        this.nomeJogador = nomeJogador;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getDataHoraAcesso() {
        return dataHoraAcesso;
    }

    public void setDataHoraAcesso(String dataHoraAcesso) {
        this.dataHoraAcesso = dataHoraAcesso;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 89 * hash + this.id;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final LogAcesso other = (LogAcesso) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }
    
    
}