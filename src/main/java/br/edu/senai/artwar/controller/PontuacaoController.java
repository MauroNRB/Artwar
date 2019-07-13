package br.edu.senai.artwar.controller;

import br.edu.senai.artwar.model.Pontuacao;
import br.edu.senai.artwar.repository.PontuacaoRep;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/protegido/pontuacao")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PontuacaoController {

    private PontuacaoRep prep = new PontuacaoRep();

    @GET
    public List<Pontuacao> getAll() {
        return prep.getTop10();
    }

    @POST
    public Pontuacao salvar(Pontuacao p) {
        prep.salvar(p);
        return p;
    }
}
