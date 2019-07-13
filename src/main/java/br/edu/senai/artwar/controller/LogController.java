package br.edu.senai.artwar.controller;

import br.edu.senai.artwar.model.LogAcesso;
import br.edu.senai.artwar.repository.LogAcessoRep;

import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/logAcesso")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LogController {
    private LogAcessoRep lrep = new LogAcessoRep();
    
     @GET
    public List<LogAcesso> getAll() {
        return lrep.getLogs();
    }
    
    @POST
    public LogAcesso salvar(LogAcesso l) {
        lrep.salvar(l);
        return l;
    }
}
