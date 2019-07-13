package br.edu.senai.artwar.controller;

import br.edu.senai.artwar.model.Jogador;
import br.edu.senai.artwar.repository.JogadorRep;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/jogador")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class JogadorController {

    private final JogadorRep jrep = new JogadorRep();

    @GET
    public List<Jogador> getAll() {
        return jrep.getJogadores();
    }

    @GET
    @Path("{id}")
    public Jogador getById(@PathParam("id") int id) {
        return jrep.buscarPorId(id);
    }

    @POST
    public Jogador salvar(Jogador j) {
        if (jrep.buscarPorNome(j.getNome()) == null) {
            jrep.salvar(j);
        }
        return j;
    }

    @DELETE
    @Path("/{id}")
    public Response excluir(@PathParam("id") int id) {
        jrep.excluir(jrep.buscarPorId(id));
        return Response.status(200).entity("excluido com sucessso").build();
    }
}
